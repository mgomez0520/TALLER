# 🚀 INSTRUCCIONES DE INSTALACIÓN

## Paso 1: Instalar Node.js

Node.js es necesario para ejecutar el servidor.

### Opción A: Descarga Directa
1. Ve a: https://nodejs.org/
2. Descarga la versión **LTS** (recomendada)
3. Ejecuta el instalador
4. Sigue las instrucciones (deja las opciones por defecto)
5. Reinicia tu terminal/PowerShell

### Opción B: Verificar si ya está instalado
Abre PowerShell y ejecuta:
```powershell
node --version
npm --version
```

Si ves números de versión, ya lo tienes instalado ✅

---

## Paso 2: Instalar Dependencias del Proyecto

Abre PowerShell en esta carpeta y ejecuta:

```powershell
cd "g:\Mi unidad\GESTION TALLER"
npm install
```

Esto instalará:
- Express (servidor web)
- SQLite3 (base de datos)
- Body-parser (manejo de datos)
- CORS (acceso desde otros dispositivos)

---

## Paso 3: Iniciar el Servidor

```powershell
npm start
```

Verás algo como:
```
🚀 Servidor corriendo en http://localhost:3000
📱 Accede desde tu móvil usando la IP de red local
```

---

## Paso 4: Acceder desde el Navegador

### Desde la misma computadora:
http://localhost:3000

### Desde un móvil/tablet:
1. Encuentra tu IP local ejecutando en PowerShell:
   ```powershell
   ipconfig
   ```
   
2. Busca "Dirección IPv4" (ejemplo: 192.168.1.100)

3. En tu móvil (conectado a la misma WiFi), abre el navegador:
   ```
   http://192.168.1.100:3000
   ```

---

## Paso 5: Instalar como App en Móvil (Opcional)

### Android (Chrome):
1. Abre la URL en Chrome
2. Menú (⋮) → "Agregar a pantalla de inicio"
3. ✅ Ya tienes la app instalada

### iOS (Safari):
1. Abre la URL en Safari
2. Botón Compartir (□↑) → "Agregar a pantalla de inicio"
3. ✅ Ya tienes la app instalada

---

## 🎯 Resumen Rápido

```powershell
# 1. Instalar Node.js desde nodejs.org

# 2. Instalar dependencias
cd "g:\Mi unidad\GESTION TALLER"
npm install

# 3. Iniciar servidor
npm start

# 4. Abrir navegador
# http://localhost:3000
```

---

## ⚠️ Solución de Problemas

### Error: "npm no se reconoce..."
- Node.js no está instalado o no está en el PATH
- Reinstala Node.js y reinicia PowerShell

### Error: "Puerto 3000 en uso"
- Otra aplicación está usando el puerto
- Cierra otras aplicaciones o cambia el puerto en server.js

### No puedo acceder desde móvil
- Verifica que estén en la misma red WiFi
- Desactiva temporalmente el firewall de Windows
- Confirma la IP con `ipconfig`

---

## 📚 Siguiente Paso

Lee el archivo **MANUAL.md** para aprender a usar el sistema.

¡Listo! 🎉
