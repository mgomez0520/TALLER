# 📱 Manual de Uso - Sistema de Gestión de Taller

## 🚀 Inicio Rápido

### 1. Instalación del Sistema

1. **Instalar Node.js** (si no lo tienes):
   - Descargar desde: https://nodejs.org/
   - Versión recomendada: 18 o superior

2. **Instalar dependencias**:
   ```bash
   cd "g:\Mi unidad\GESTION TALLER"
   npm install
   ```

3. **Iniciar el servidor**:
   ```bash
   npm start
   ```

4. **Acceder a la aplicación**:
   - Desde la misma computadora: http://localhost:3000
   - Desde otros dispositivos en la misma red: http://[IP-DE-TU-PC]:3000

### 2. Encontrar tu IP local

**Windows (PowerShell)**:
```powershell
ipconfig
```
Busca "Dirección IPv4" (ejemplo: 192.168.1.100)

**Acceso móvil**: http://192.168.1.100:3000

---

## 📲 Instalar en Dispositivos Móviles

### Android (Chrome)
1. Abre Chrome y ve a la URL del servidor
2. Toca el menú (⋮) en la esquina superior derecha
3. Selecciona **"Agregar a pantalla de inicio"** o **"Instalar app"**
4. Confirma la instalación
5. ✅ La app aparecerá como una aplicación nativa

### iOS (Safari)
1. Abre Safari y ve a la URL del servidor
2. Toca el botón **Compartir** (□↑) en la parte inferior
3. Desplázate y selecciona **"Agregar a pantalla de inicio"**
4. Dale un nombre y toca **"Agregar"**
5. ✅ La app aparecerá en tu pantalla de inicio

---

## 🔄 Flujo de Trabajo

### Estados del Proceso

```
REPORTE → TÉCNICO ASIGNADO → ANÁLISIS → TALLER → DIAGNÓSTICO
                                                        ↓
                                              ¿Requiere reparación?
                                                   ↙         ↘
                                           REPARACIÓN    SEGUIMIENTO
                                                   ↓         ↓
                                                 SEGUIMIENTO
```

### 1. **REPORTE** (Inicio)
- **Quién**: Conductor
- **Acción**: Reportar novedad del vehículo
- **Datos requeridos**:
  - ✅ Número de vehículo (obligatorio)
  - Conductor (opcional)
  - ✅ Descripción del problema (obligatorio)

### 2. **TÉCNICO ASIGNADO**
- **Quién**: Supervisor/Coordinador
- **Acción**: Asignar técnico al caso
- **Datos requeridos**:
  - ✅ Nombre del técnico

### 3. **ANÁLISIS**
- **Quién**: Técnico asignado
- **Acción**: Realizar análisis del problema
- **Datos requeridos**:
  - Notas del análisis

### 4. **TALLER**
- **Quién**: Técnico/Supervisor
- **Acción**: Asignar a un taller específico
- **Datos requeridos**:
  - ✅ Nombre del taller

### 5. **DIAGNÓSTICO**
- **Quién**: Taller
- **Acción**: Entregar diagnóstico técnico
- **Datos requeridos**:
  - ✅ Diagnóstico detallado
  - ✅ ¿Requiere reparación? (Sí/No)

### 6a. **REPARACIÓN** (si requiere)
- **Quién**: Taller
- **Acción**: Realizar reparación
- **Siguiente paso**: SEGUIMIENTO

### 6b. **SEGUIMIENTO** (si no requiere reparación)
- **Quién**: Técnico/Supervisor
- **Acción**: Monitorear el vehículo
- **Estado final**

---

## 🎯 Uso de la Aplicación

### Pestaña: Nuevo Reporte

**Crear un reporte nuevo:**
1. Completa el formulario:
   - Número de vehículo
   - Conductor (opcional)
   - Descripción del problema
2. Toca **"Crear Reporte"**
3. ✅ El reporte se crea con estado "REPORTE"

**Buscar reportes de un vehículo:**
1. Ingresa el número de vehículo en el campo de búsqueda
2. Toca **"Buscar"**
3. Se mostrarán todos los reportes históricos de ese vehículo

### Pestaña: Lista

**Ver todos los reportes:**
- La lista se actualiza automáticamente
- Cada tarjeta muestra:
  - 🚗 Número de vehículo
  - Estado actual
  - Descripción breve
  - Fecha de reporte
  - Técnico asignado (si aplica)

**Filtrar por estado:**
1. Usa el selector "Filtrar por estado"
2. Elige el estado deseado
3. La lista se filtra automáticamente

**Ver detalle y actualizar:**
1. Toca cualquier tarjeta de reporte
2. Se abre el modal con todos los detalles
3. Puedes actualizar el estado desde ahí

### Pestaña: Estadísticas

**Ver resumen:**
- Total de reportes
- Cantidad por cada estado
- Actualiza en tiempo real

---

## 🔧 Actualizar Estado de un Reporte

1. **Desde la pestaña "Lista"**, toca el reporte que deseas actualizar
2. En el modal de detalle, desplázate hasta **"Actualizar Estado"**
3. Selecciona el nuevo estado (solo aparecen los estados válidos según el flujo)
4. Completa los campos adicionales según el estado:
   - **TÉCNICO ASIGNADO**: Nombre del técnico
   - **TALLER**: Nombre del taller
   - **DIAGNÓSTICO**: Diagnóstico + ¿Requiere reparación?
5. Agrega notas adicionales (opcional)
6. Toca **"Actualizar"**
7. ✅ El estado se actualiza y se registra en el historial

---

## 💡 Consejos y Mejores Prácticas

### Para Conductores
- ✅ Usa números de vehículo consistentes (ej: siempre "001", no "1" o "VH-001")
- ✅ Describe el problema con claridad
- ✅ Reporta inmediatamente cuando notes algo anormal

### Para Técnicos
- ✅ Actualiza el estado lo antes posible
- ✅ Agrega notas detalladas en cada actualización
- ✅ Revisa el historial del vehículo antes de analizar

### Para Supervisores
- ✅ Asigna técnicos según disponibilidad y especialidad
- ✅ Monitorea las estadísticas regularmente
- ✅ Revisa reportes en estado "REPORTE" para asignar rápidamente

---

## 🌐 Trabajo Offline

La aplicación funciona sin conexión a internet:
- ✅ Puedes consultar reportes previamente cargados
- ✅ La interfaz sigue funcionando
- ⚠️ Las actualizaciones se sincronizarán cuando vuelva la conexión

---

## 🔒 Seguridad y Acceso

**Acceso en red local:**
- Solo dispositivos en la misma red WiFi pueden acceder
- Asegúrate de usar una red segura
- No compartas la IP en redes públicas

**Para producción (opcional):**
- Considera agregar autenticación de usuarios
- Usa HTTPS con certificados SSL
- Configura un firewall apropiado

---

## ❓ Solución de Problemas

### No puedo acceder desde mi móvil
✅ **Solución**:
1. Verifica que el servidor esté corriendo
2. Confirma que ambos dispositivos estén en la misma red WiFi
3. Verifica la IP con `ipconfig` (Windows) o `ifconfig` (Mac/Linux)
4. Desactiva temporalmente el firewall para probar

### La app no se instala en mi móvil
✅ **Solución**:
- **Android**: Usa Chrome (no otros navegadores)
- **iOS**: Usa Safari (no otros navegadores)
- Asegúrate de acceder mediante HTTP/HTTPS, no file://

### Los cambios no se guardan
✅ **Solución**:
1. Verifica que el servidor esté corriendo
2. Revisa la consola del navegador (F12) para ver errores
3. Comprueba tu conexión de red

### El servidor no inicia
✅ **Solución**:
1. Verifica que Node.js esté instalado: `node --version`
2. Reinstala dependencias: `npm install`
3. Verifica que el puerto 3000 no esté en uso

---

## 📊 Reportes y Exportación (Futuro)

**Funcionalidades planificadas:**
- Exportar reportes a Excel
- Generar reportes PDF
- Gráficos de rendimiento
- Notificaciones automáticas

---

## 🆘 Soporte

Para reportar problemas o sugerencias:
1. Documenta el error (captura de pantalla)
2. Anota los pasos para reproducirlo
3. Contacta al administrador del sistema

---

## 📝 Notas de Versión

**v1.0.0** (Diciembre 2025)
- ✅ Sistema completo de gestión de reportes
- ✅ Flujo de estados configurable
- ✅ Progressive Web App (PWA)
- ✅ Soporte multiplataforma
- ✅ Funcionalidad offline
- ✅ Interfaz responsive
