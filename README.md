# 🔧 Sistema de Gestión de Taller
## Alberto Ochoa & Cía. S.A.S

Sistema completo de gestión de reportes de taller para vehículos, optimizado para múltiples dispositivos.

## 🌐 ACCESO EN LÍNEA

### 📺 Dashboard para TV:
**https://mgomez0520.github.io/TALLER/public/dashboard.html**

### 📱 Sistema completo:
**https://mgomez0520.github.io/TALLER/public/index.html**

## 🎨 Identidad Visual

- **Colores de marca**: Negro (#1a1a1a) y Rojo (#e31e24)
- **Diseño**: Moderno, profesional y responsive
- **Logo**: Integrado en header y aplicación

## 🚀 Características

### 📱 Sistema Principal (`index.html`)
- ✅ Creación de reportes de vehículos
- ✅ Gestión de estados del proceso de reparación
- ✅ Lista de reportes con búsqueda y filtros
- ✅ Estadísticas en tiempo real
- ✅ **Gestión de proveedores y talleres externos**
- ✅ PWA instalable en móviles
- ✅ **Sin servidor - Todo funciona offline**

### 📺 Dashboard para TV (`dashboard.html`)
- ✅ Vista optimizada para pantallas grandes
- ✅ Actualización automática cada 10 segundos
- ✅ Muestra solo vehículos en proceso
- ✅ Modo pantalla completa (F11 o doble clic)
- ✅ Colores corporativos

## 📱 Estados del Proceso

1. **REPORTE** - Reporte inicial recibido
2. **TÉCNICO ASIGNADO** - Técnico designado al caso
3. **ANÁLISIS** - Revisión inicial del vehículo
4. **TALLER** - En proceso de reparación
5. **DIAGNÓSTICO** - Evaluación completada
6. **REPARACIÓN** - Trabajo en curso
7. **SEGUIMIENTO** - Finalizado

## 💾 Almacenamiento

- **Tecnología:** localStorage (navegador)
- **Sin servidor:** No requiere Node.js, PHP, ni base de datos
- **Sincronización:** Los datos se guardan localmente en cada navegador

## 🏭 Módulo de Proveedores

- Registro de talleres externos
- Proveedores de repuestos
- Calificación con estrellas (1-5)
- Información de contacto completa
- Activación/desactivación de proveedores
- Especialidades por tipo de servicio

## 🔧 Uso

### En PC/Laptop:
1. Abrir la URL: https://mgomez0520.github.io/TALLER/public/index.html
2. Crear y gestionar reportes
3. Ver estadísticas

### En TV:
1. Abrir la URL del dashboard: https://mgomez0520.github.io/TALLER/public/dashboard.html
2. Presionar F11 para pantalla completa
3. Se actualiza automáticamente cada 10 segundos

### En Móvil:
1. Abrir la URL del sistema
2. Clic en "📱 Instalar" para agregar a pantalla de inicio
3. Usar como app nativa

## 🔄 Actualizar el Sistema

```bash
cd "g:\Mi unidad\GESTION TALLER"
git add .
git commit -m "Descripción de cambios"
git push
```

Esperar 1-2 minutos para que GitHub Pages se actualice.

## 📲 Instalar en Móvil

### Android (Chrome):
1. Abrir la URL en Chrome
2. Tocar el menú (⋮) → "Agregar a pantalla de inicio"
3. La app se instalará como una aplicación nativa

### iOS (Safari):
1. Abrir la URL en Safari
2. Tocar el botón compartir (□↑)
3. Seleccionar "Agregar a pantalla de inicio"

## 🔧 Desarrollo

```bash
npm run dev
```

## 📊 Base de Datos

El sistema usa SQLite para almacenamiento local, creando automáticamente las tablas necesarias al iniciar.

## 📄 Licencia

MIT
