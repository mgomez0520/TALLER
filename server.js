const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Base de datos
const db = new sqlite3.Database('./taller.db', (err) => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err);
  } else {
    console.log('Conectado a la base de datos SQLite');
    inicializarDB();
  }
});

// Crear tablas
function inicializarDB() {
  db.run(`
    CREATE TABLE IF NOT EXISTS vehiculos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      numero_vehiculo TEXT UNIQUE NOT NULL,
      placa TEXT,
      modelo TEXT,
      marca TEXT,
      conductor TEXT,
      activo INTEGER DEFAULT 1,
      fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS reportes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      numero_vehiculo TEXT NOT NULL,
      estado TEXT NOT NULL,
      descripcion TEXT,
      tecnico_asignado TEXT,
      taller_asignado TEXT,
      diagnostico TEXT,
      requiere_reparacion INTEGER,
      notas TEXT,
      fecha_reporte DATETIME DEFAULT CURRENT_TIMESTAMP,
      fecha_actualizacion DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (numero_vehiculo) REFERENCES vehiculos(numero_vehiculo)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS historial (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      reporte_id INTEGER NOT NULL,
      estado_anterior TEXT,
      estado_nuevo TEXT,
      usuario TEXT,
      comentario TEXT,
      fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (reporte_id) REFERENCES reportes(id)
    )
  `);
}

// ========== ENDPOINTS API ==========

// Obtener todos los reportes
app.get('/api/reportes', (req, res) => {
  const estado = req.query.estado;
  let query = 'SELECT * FROM reportes ORDER BY fecha_actualizacion DESC';
  let params = [];
  
  if (estado) {
    query = 'SELECT * FROM reportes WHERE estado = ? ORDER BY fecha_actualizacion DESC';
    params = [estado];
  }
  
  db.all(query, params, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

// Obtener un reporte específico
app.get('/api/reportes/:id', (req, res) => {
  db.get('SELECT * FROM reportes WHERE id = ?', [req.params.id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!row) {
      res.status(404).json({ error: 'Reporte no encontrado' });
    } else {
      res.json(row);
    }
  });
});

// Crear nuevo reporte
app.post('/api/reportes', (req, res) => {
  const { numero_vehiculo, descripcion, conductor } = req.body;
  
  if (!numero_vehiculo) {
    return res.status(400).json({ error: 'Número de vehículo es requerido' });
  }

  // Primero, crear o actualizar el vehículo
  db.run(
    `INSERT OR REPLACE INTO vehiculos (numero_vehiculo, conductor) VALUES (?, ?)`,
    [numero_vehiculo, conductor],
    function(err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      // Crear el reporte
      db.run(
        `INSERT INTO reportes (numero_vehiculo, estado, descripcion) VALUES (?, ?, ?)`,
        [numero_vehiculo, 'REPORTE', descripcion],
        function(err) {
          if (err) {
            res.status(500).json({ error: err.message });
          } else {
            const reporteId = this.lastID;
            
            // Registrar en historial
            db.run(
              `INSERT INTO historial (reporte_id, estado_nuevo, comentario) VALUES (?, ?, ?)`,
              [reporteId, 'REPORTE', 'Reporte inicial creado']
            );
            
            res.json({ 
              id: reporteId, 
              numero_vehiculo, 
              estado: 'REPORTE',
              mensaje: 'Reporte creado exitosamente' 
            });
          }
        }
      );
    }
  );
});

// Actualizar estado de reporte
app.put('/api/reportes/:id', (req, res) => {
  const { estado, tecnico_asignado, taller_asignado, diagnostico, requiere_reparacion, notas } = req.body;
  const reporteId = req.params.id;
  
  // Primero obtener el estado actual
  db.get('SELECT estado FROM reportes WHERE id = ?', [reporteId], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ error: 'Reporte no encontrado' });
    }
    
    const estadoAnterior = row.estado;
    
    // Construir query dinámicamente
    let updates = [];
    let params = [];
    
    if (estado) {
      updates.push('estado = ?');
      params.push(estado);
    }
    if (tecnico_asignado !== undefined) {
      updates.push('tecnico_asignado = ?');
      params.push(tecnico_asignado);
    }
    if (taller_asignado !== undefined) {
      updates.push('taller_asignado = ?');
      params.push(taller_asignado);
    }
    if (diagnostico !== undefined) {
      updates.push('diagnostico = ?');
      params.push(diagnostico);
    }
    if (requiere_reparacion !== undefined) {
      updates.push('requiere_reparacion = ?');
      params.push(requiere_reparacion);
    }
    if (notas !== undefined) {
      updates.push('notas = ?');
      params.push(notas);
    }
    
    updates.push('fecha_actualizacion = CURRENT_TIMESTAMP');
    params.push(reporteId);
    
    const query = `UPDATE reportes SET ${updates.join(', ')} WHERE id = ?`;
    
    db.run(query, params, function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        // Registrar en historial
        if (estado && estado !== estadoAnterior) {
          db.run(
            `INSERT INTO historial (reporte_id, estado_anterior, estado_nuevo, comentario) 
             VALUES (?, ?, ?, ?)`,
            [reporteId, estadoAnterior, estado, notas || 'Actualización de estado']
          );
        }
        
        res.json({ 
          mensaje: 'Reporte actualizado exitosamente',
          cambios: this.changes
        });
      }
    });
  });
});

// Obtener historial de un reporte
app.get('/api/reportes/:id/historial', (req, res) => {
  db.all(
    'SELECT * FROM historial WHERE reporte_id = ? ORDER BY fecha DESC',
    [req.params.id],
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(rows);
      }
    }
  );
});

// Obtener estadísticas
app.get('/api/estadisticas', (req, res) => {
  db.all(`
    SELECT estado, COUNT(*) as cantidad 
    FROM reportes 
    GROUP BY estado
  `, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

// Búsqueda por número de vehículo
app.get('/api/buscar/:numero_vehiculo', (req, res) => {
  db.all(
    'SELECT * FROM reportes WHERE numero_vehiculo = ? ORDER BY fecha_reporte DESC',
    [req.params.numero_vehiculo],
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(rows);
      }
    }
  );
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📱 Accede desde tu móvil usando la IP de red local`);
});

// Manejo de cierre
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Base de datos cerrada');
    process.exit(0);
  });
});
