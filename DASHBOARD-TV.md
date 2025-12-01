# 📺 Dashboard para TV - Guía de Uso

## 🎯 Descripción

Dashboard de tiempo real optimizado para proyectar en pantallas grandes (TV, monitores) en el taller. Muestra el estado actual de todos los vehículos en proceso con actualización automática cada 10 segundos.

---

## 🚀 Cómo Acceder

### Opción 1: Desde la aplicación principal
1. Ir a http://localhost:3000
2. Hacer clic en el botón rojo **"📺 Dashboard TV"** en la barra de navegación
3. Se abrirá en una nueva pestaña

### Opción 2: Acceso directo
- Ir directamente a: **http://localhost:3000/dashboard.html**

### Opción 3: Acceso desde red local (para proyectar en TV)
1. Obtener la IP de tu computadora en la red local
2. Acceder desde cualquier dispositivo: **http://[IP]:3000/dashboard.html**
3. Ejemplo: `http://192.168.1.100:3000/dashboard.html`

---

## 📊 Elementos del Dashboard

### 1. Header (Encabezado)

**Lado Izquierdo:**
- Logo animado de Alberto Ochoa
- Nombre de la empresa
- Título del sistema

**Centro:**
- Reloj en tiempo real (HH:MM:SS)
- Fecha actual completa

**Lado Derecho:**
- Indicador de actualización
- Última actualización (timestamp)

---

### 2. Estadísticas Principales (4 Tarjetas)

| Tarjeta | Icono | Muestra | Color |
|---------|-------|---------|-------|
| Total Reportes | 📊 | Cantidad total de reportes | Azul |
| En Taller | 🔧 | Vehículos con estado TALLER | Naranja |
| En Reparación | ⚙️ | Vehículos con estado REPARACIÓN | Rojo |
| Diagnóstico | 📋 | Vehículos con estado DIAGNÓSTICO | Cyan |

---

### 3. Vehículos en Proceso (Grid Principal)

Muestra tarjetas **detalladas** de todos los vehículos que NO están en SEGUIMIENTO.

**Cada tarjeta muestra:**
- 🚗 **Número de vehículo** (grande, destacado en rojo)
- **Estado actual** (badge con color según el estado)
- � **Fecha de reporte** (formato inteligente: Hoy, Ayer, o fecha completa)
- 🕐 **Última actualización** (cuándo se modificó por última vez)
- �👤 **Técnico asignado** (o "Sin asignar" con advertencia si falta)
- 🔧 **Taller asignado** (o "Sin asignar" si corresponde)
- 📝 **Descripción completa** de la novedad reportada (texto completo, sin truncar)
- 🔍 **Diagnóstico del taller** (si existe, con fondo destacado)
- ⚙️/✅ **Decisión de reparación** (SÍ REQUIERE o NO REQUIERE con colores)
- 📌 **Notas adicionales** (si existen)
- ⏱️ **Tiempo transcurrido** desde el reporte (en días/horas/minutos)

**Colores por Estado:**
- 📝 REPORTE: Amarillo (#eab308)
- 👤 TÉCNICO ASIGNADO: Azul (#3b82f6)
- 🔍 ANÁLISIS: Morado (#8b5cf6)
- 🔧 TALLER: Naranja (#f59e0b)
- 📋 DIAGNÓSTICO: Cyan (#06b6d4)
- ⚙️ REPARACIÓN: Rojo (#ef4444)
- 📊 SEGUIMIENTO: Verde (#10b981) - no se muestra en el dashboard

**Indicadores Visuales Especiales:**
- ⚠️ **Advertencias:** Campos sin completar se muestran con fondo amarillo
- 🔍 **Diagnóstico:** Fondo cyan para destacar el diagnóstico del taller
- ⚙️ **Requiere reparación:** Fondo rojo cuando SÍ requiere
- ✅ **No requiere reparación:** Fondo verde cuando NO requiere

---

### 4. Resumen por Estado

Muestra un contador de vehículos para cada estado del proceso:
- 📝 REPORTE
- 👤 TÉCNICO ASIGNADO
- 🔍 ANÁLISIS
- 🔧 TALLER
- 📋 DIAGNÓSTICO
- ⚙️ REPARACIÓN
- 📊 SEGUIMIENTO

---

## ⚙️ Características Técnicas

### Actualización Automática
- **Intervalo:** Cada 10 segundos
- **Automático:** No requiere refrescar manualmente
- **Inteligente:** Se pausa cuando la pestaña no está visible (ahorra recursos)

### Reloj en Tiempo Real
- Actualización cada segundo
- Formato 24 horas
- Fecha completa en español

### Responsive
- Optimizado para pantallas grandes (1920px+)
- **3 columnas** en pantallas Full HD (1920px)
- **4 columnas** en pantallas 4K (2560px+)
- **2 columnas** en pantallas medianas (1280px)
- **1 columna** en dispositivos móviles (768px)
- Grid flexible que reorganiza las tarjetas automáticamente
- **Tarjetas más grandes** (450px mínimo) para mostrar todos los detalles

---

## 🖥️ Modo Pantalla Completa

### Activar pantalla completa:
- **Método 1:** Presionar **F11**
- **Método 2:** Hacer **doble clic** en cualquier parte del dashboard
- **Método 3:** Usar el icono de pantalla completa del navegador

### Salir de pantalla completa:
- Presionar **F11** nuevamente
- Presionar **ESC**

---

## 🎨 Diseño Visual

### Tema Oscuro Profesional
- Fondo oscuro para reducir fatiga visual
- Contraste alto para fácil lectura a distancia
- Colores de marca Alberto Ochoa (rojo #e31e24)

### Animaciones
- Logo con efecto pulsante
- Icono de actualización giratorio
- Tarjetas con hover effect
- Números con animación de entrada

### Tipografía
- Fuentes grandes y legibles
- Números con tamaño destacado
- Iconos emoji para mejor visualización

---

## 📱 Configuración para Proyección en TV

### Paso a Paso:

1. **Conectar la computadora al TV**
   - Cable HDMI
   - Chromecast/AirPlay
   - Conexión inalámbrica

2. **Abrir el navegador en el TV**
   - Usar Chrome, Firefox o Edge
   - Acceder a: `http://[IP_COMPUTADORA]:3000/dashboard.html`

3. **Activar pantalla completa**
   - Presionar F11
   - O doble clic en el dashboard

4. **Ajustes recomendados del navegador**
   - Ocultar favoritos/marcadores
   - Ocultar barra de direcciones (pantalla completa hace esto)
   - Desactivar protector de pantalla
   - Configurar para que no se apague la pantalla

5. **Dejar funcionando**
   - El dashboard se actualiza automáticamente
   - No requiere intervención

---

## 🔧 Solución de Problemas

### El dashboard no carga
- ✅ Verificar que el servidor está corriendo en puerto 3000
- ✅ Verificar conexión de red
- ✅ Intentar refrescar la página (Ctrl+R o Cmd+R)

### No se actualiza automáticamente
- ✅ Verificar que la pestaña está activa/visible
- ✅ Revisar consola del navegador (F12) para errores
- ✅ Verificar conexión al servidor

### No se ven los vehículos
- ✅ Verificar que hay reportes creados en el sistema
- ✅ Verificar que no todos están en estado SEGUIMIENTO
- ✅ Revisar la consola del navegador

### Problemas de rendimiento
- ✅ Cerrar otras pestañas del navegador
- ✅ Verificar que el intervalo de actualización no sea muy corto
- ✅ Reiniciar el navegador

---

## 💡 Mejores Prácticas

### Para Taller
1. **Ubicación del TV:** Lugar visible para todos los técnicos
2. **Tamaño:** Mínimo 40" para buena visibilidad
3. **Altura:** A nivel de los ojos o ligeramente superior
4. **Iluminación:** Evitar reflejos directos en la pantalla

### Para Operación
1. **Mantener navegador actualizado**
2. **Configurar equipo para no entrar en reposo**
3. **Verificar conexión de red estable**
4. **Tener una computadora dedicada si es posible**

### Para Datos
1. **Actualizar reportes regularmente en el sistema**
2. **Completar información de técnicos y talleres**
3. **Agregar diagnósticos detallados**
4. **Mantener estados actualizados**

---

## 📊 Información Mostrada

### Lo que SÍ se muestra:
- ✅ Vehículos en proceso (todos excepto SEGUIMIENTO)
- ✅ Estado actual de cada vehículo con código de color
- ✅ Fechas de reporte y actualización (formato inteligente)
- ✅ Técnico y taller asignado (con alertas si falta)
- ✅ Descripción completa de la novedad (sin truncar)
- ✅ Diagnóstico completo del taller
- ✅ Decisión de reparación (SÍ/NO con colores distintivos)
- ✅ Notas adicionales del proceso
- ✅ Tiempo desde que se reportó el problema
- ✅ Resumen de cantidades por estado

### Lo que NO se muestra:
- ❌ Vehículos en SEGUIMIENTO (ya finalizados)
- ❌ Historial de cambios
- ❌ Notas internas
- ❌ Información de conductor

---

## 🎯 Ventajas del Dashboard

1. **Visibilidad en tiempo real:** Todos ven el estado actual
2. **Actualización automática:** Sin intervención manual
3. **Interfaz limpia:** Información clara y directa
4. **Optimizado para distancia:** Legible desde lejos
5. **Profesional:** Mejora la imagen del taller
6. **Productividad:** Técnicos saben qué hay pendiente
7. **Transparencia:** Cliente puede ver el proceso si visita

---

## 🔄 Personalización (Opcional)

Si deseas modificar el intervalo de actualización:

1. Abrir: `/public/dashboard.js`
2. Buscar: `const REFRESH_INTERVAL = 10000;`
3. Cambiar el valor (en milisegundos):
   - 5000 = 5 segundos
   - 10000 = 10 segundos (recomendado)
   - 30000 = 30 segundos
   - 60000 = 1 minuto

---

## 📞 Soporte

Para ayuda adicional, consulte:
- Manual del sistema: `MANUAL.md`
- Flujo de trabajo: `FLUJO-TRABAJO.md`
- Guía de estilos: `GUIA-ESTILOS.md`

---

**Fecha de creación:** 1 de diciembre de 2025  
**Versión:** 1.0  
**Optimizado para:** Pantallas de 40" a 80"
