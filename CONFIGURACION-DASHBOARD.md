# 📺 Configuración del Dashboard TV

## 🎯 Descripción
Dashboard optimizado para proyectar en TV el estado de los vehículos en taller.

---

## 🌐 Acceso al Dashboard

### Acceso Local (misma computadora)
```
http://localhost:3000/dashboard.html
```

### Acceso en Red Local (TV o dispositivos)
**IP del servidor:** `10.26.186.143`

```
http://10.26.186.143:3000/dashboard.html
```

> ⚠️ **Importante:** La computadora y el TV/dispositivo deben estar en la misma red WiFi.

---

## 🚀 Iniciar el Servidor

### En Windows:
```bash
# Doble clic en:
iniciar.bat

# O desde PowerShell:
.\iniciar.ps1
```

### En macOS/Linux:
```bash
node server.js
```

El servidor se iniciará en: `http://localhost:3000`

---

## 📺 Proyectar en TV

### Opción 1: Cable HDMI
1. Conecta tu laptop al TV con cable HDMI
2. Abre: `http://localhost:3000/dashboard.html`
3. Presiona **F11** para pantalla completa (o doble clic)
4. ¡Listo! Se actualiza automáticamente cada 10 segundos

### Opción 2: Smart TV (WiFi)
1. Asegúrate que el TV esté en la misma red WiFi
2. Abre el navegador del TV
3. Ingresa: `http://10.26.186.143:3000/dashboard.html`
4. Pantalla completa

### Opción 3: Chromecast / Fire Stick
1. Conecta el dispositivo al TV
2. Abre el navegador
3. Ve a: `http://10.26.186.143:3000/dashboard.html`
4. Pantalla completa

---

## ⚙️ Características del Dashboard

### ✅ Funcionalidades
- **Actualización automática** cada 10 segundos
- **Diseño limpio** con fondo blanco
- **6 vehículos visibles** en pantalla simultáneamente
- **Información compacta**: Reporte, Pendientes, Técnico, Prueba de Ruta
- **Badges de estado** con colores distintivos
- **Modo pantalla completa** (F11 o doble clic)
- **Pausa inteligente** cuando cambias de pestaña

### 📊 Información Mostrada
Cada tarjeta muestra:
- **Número de vehículo** (ejemplo: 🚗 2996)
- **Estado/Taller** (badge en esquina superior derecha)
- **Reporte:** Descripción del problema
- **⚠ Pendientes:** Observaciones del conductor (destacado en rojo)
- **Técnico:** Nombre del técnico asignado
- **Prueba de Ruta:** ✅ SI (cuando aplica)

### 🎨 Estados y Colores
- **AGA** - Rojo (#ef4444)
- **DIOMEDEZ** - Morado (#8b5cf6)
- **MECANICA** - Verde (#10b981)
- **REPORTE** - Amarillo (#fbbf24)
- **TÉCNICO ASIGNADO** - Azul (#3b82f6)
- **ANÁLISIS** - Morado (#8b5cf6)
- **TALLER** - Naranja (#f59e0b)
- **DIAGNÓSTICO** - Cyan (#06b6d4)
- **REPARACIÓN** - Rojo (#ef4444)

---

## 🔧 Ajustes de Visualización

### Zoom del Navegador
Si las tarjetas se ven muy grandes o pequeñas:
- **Aumentar:** `Cmd +` (Mac) o `Ctrl +` (Windows)
- **Reducir:** `Cmd -` (Mac) o `Ctrl -` (Windows)
- **Restablecer:** `Cmd 0` (Mac) o `Ctrl 0` (Windows)

### Pantalla Completa
- **Activar:** Presiona `F11` o haz **doble clic** en la pantalla
- **Desactivar:** Presiona `F11` o `ESC`

---

## 📁 Archivos del Dashboard

### Principales
```
/public/dashboard.html    → Página principal del dashboard
/public/dashboard.css     → Estilos optimizados para TV
/public/dashboard.js      → Lógica y actualización automática
```

### Configuración
```
server.js                 → Servidor backend
taller.db                 → Base de datos SQLite
datos-prueba.js          → Script para cargar datos de prueba
```

---

## 🛠️ Mantenimiento

### Cargar Datos de Prueba
```bash
node datos-prueba.js
```

### Verificar IP del Servidor
```bash
# macOS/Linux:
ifconfig | grep "inet " | grep -v 127.0.0.1

# Windows:
ipconfig
```

### Reiniciar el Servidor
```bash
# Detener (Ctrl + C en la terminal)
# Iniciar nuevamente:
node server.js
```

### Ver Vehículos Activos
El dashboard muestra automáticamente todos los vehículos que **NO** están en estado `SEGUIMIENTO`.

---

## 🐛 Solución de Problemas

### El dashboard no carga
1. ✅ Verifica que el servidor esté corriendo: `http://localhost:3000`
2. ✅ Revisa que uses el puerto correcto (3000)
3. ✅ Refresca la página (`Cmd + R` o `Ctrl + R`)

### No se ve desde el TV
1. ✅ Verifica que estén en la misma red WiFi
2. ✅ Usa la IP correcta: `http://10.26.186.143:3000/dashboard.html`
3. ✅ Desactiva el firewall temporalmente para probar

### Las tarjetas se ven cortadas
1. ✅ Ajusta el zoom del navegador (`Cmd -` / `Ctrl -`)
2. ✅ Verifica la resolución del TV (1920x1080 recomendada)
3. ✅ Usa pantalla completa (F11)

### No se actualiza automáticamente
1. ✅ Verifica que la pestaña esté activa (no en segundo plano)
2. ✅ Revisa la consola del navegador (F12) por errores
3. ✅ Refresca manualmente la página

---

## 📱 Acceso desde Móviles

También puedes ver el dashboard desde celulares/tablets:
```
http://10.26.186.143:3000/dashboard.html
```

---

## 💡 Mejores Prácticas

### Para Proyección en TV
- ✅ Usa **pantalla completa** siempre
- ✅ Ajusta el **brillo del TV** para mejor visualización
- ✅ Deja la ventana **siempre abierta** (el navegador se encarga de actualizar)
- ✅ Usa un navegador moderno (Chrome, Edge, Safari)
- ✅ **No cierres la laptop** si usas HDMI (usa modo "no dormir")

### Para Mejor Rendimiento
- ✅ Cierra otras pestañas del navegador
- ✅ Mantén la computadora conectada a corriente
- ✅ Usa conexión de red estable (Ethernet preferible)

---

## 📞 Información del Sistema

**Sistema:** Gestión de Taller - Alberto Ochoa & Cía. S.A.S  
**Puerto:** 3000  
**Base de Datos:** SQLite (taller.db)  
**Actualización:** Automática cada 10 segundos  
**Diseño:** Optimizado para pantallas grandes (TV)

---

## 📝 Notas Adicionales

- El dashboard se pausa automáticamente si cambias de pestaña (ahorra recursos)
- Los vehículos se ordenan por fecha de actualización (más recientes primero)
- El límite recomendado es **6 vehículos** en pantalla para mejor visualización
- Funciona offline una vez cargado (PWA)

---

**Última actualización:** 1 de diciembre de 2025
