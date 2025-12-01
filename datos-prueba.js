// Script para insertar datos de prueba
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./taller.db');

console.log('📊 Insertando datos de prueba...\n');

// Datos de prueba
const vehiculos = [
  { numero: '001', conductor: 'Juan Pérez' },
  { numero: '023', conductor: 'María García' },
  { numero: '045', conductor: 'Carlos Rodríguez' },
  { numero: '067', conductor: 'Ana Martínez' },
  { numero: '089', conductor: 'Luis Hernández' }
];

const reportes = [
  {
    numero_vehiculo: '001',
    estado: 'REPORTE',
    descripcion: 'Motor hace ruido extraño al acelerar'
  },
  {
    numero_vehiculo: '023',
    estado: 'TÉCNICO ASIGNADO',
    descripcion: 'Falla en el sistema de frenos',
    tecnico_asignado: 'Carlos Técnico'
  },
  {
    numero_vehiculo: '045',
    estado: 'ANÁLISIS',
    descripcion: 'Luces delanteras intermitentes',
    tecnico_asignado: 'Pedro Electricista'
  },
  {
    numero_vehiculo: '067',
    estado: 'TALLER',
    descripcion: 'Cambio de aceite y filtros',
    tecnico_asignado: 'Miguel Mecánico',
    taller_asignado: 'Taller Central'
  },
  {
    numero_vehiculo: '089',
    estado: 'DIAGNÓSTICO',
    descripcion: 'Pérdida de potencia en subidas',
    tecnico_asignado: 'Jorge Especialista',
    taller_asignado: 'Taller Motor',
    diagnostico: 'Filtro de combustible obstruido. Requiere reemplazo.',
    requiere_reparacion: 1
  },
  {
    numero_vehiculo: '001',
    estado: 'REPARACIÓN',
    descripcion: 'Reemplazo de correa de distribución',
    tecnico_asignado: 'Roberto Técnico',
    taller_asignado: 'Taller Mecánico',
    diagnostico: 'Correa desgastada, requiere cambio urgente',
    requiere_reparacion: 1
  },
  {
    numero_vehiculo: '023',
    estado: 'SEGUIMIENTO',
    descripcion: 'Revisión post-reparación de frenos',
    tecnico_asignado: 'Carlos Técnico',
    taller_asignado: 'Taller Frenos',
    diagnostico: 'Reparación completada exitosamente',
    requiere_reparacion: 0
  }
];

// Insertar vehículos
let insertados = 0;
vehiculos.forEach(v => {
  db.run(
    'INSERT OR IGNORE INTO vehiculos (numero_vehiculo, conductor) VALUES (?, ?)',
    [v.numero, v.conductor],
    (err) => {
      if (err) console.error('Error:', err);
      else {
        insertados++;
        console.log(`✅ Vehículo ${v.numero} - ${v.conductor}`);
      }
    }
  );
});

// Esperar y luego insertar reportes
setTimeout(() => {
  let reportesInsertados = 0;
  reportes.forEach((r, index) => {
    db.run(
      `INSERT INTO reportes (numero_vehiculo, estado, descripcion, tecnico_asignado, taller_asignado, diagnostico, requiere_reparacion) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [r.numero_vehiculo, r.estado, r.descripcion, r.tecnico_asignado || null, r.taller_asignado || null, r.diagnostico || null, r.requiere_reparacion || null],
      function(err) {
        if (err) {
          console.error('Error:', err);
        } else {
          reportesInsertados++;
          console.log(`✅ Reporte #${this.lastID} - Vehículo ${r.numero_vehiculo} [${r.estado}]`);
          
          if (reportesInsertados === reportes.length) {
            console.log('\n🎉 ¡Datos de prueba insertados exitosamente!');
            console.log(`\n📊 Resumen:`);
            console.log(`   - ${insertados} vehículos`);
            console.log(`   - ${reportesInsertados} reportes`);
            console.log(`\n🌐 Abre http://localhost:3000 para ver los datos\n`);
            db.close();
          }
        }
      }
    );
  });
}, 500);
