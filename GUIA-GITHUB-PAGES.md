# PUBLICAR DASHBOARD EN GITHUB PAGES

## ¿Por qué GitHub Pages?
✅ GRATIS y sin necesidad de servidor
✅ Accesible desde cualquier dispositivo por URL
✅ Se actualiza automáticamente al hacer cambios
✅ Funciona con localStorage (datos locales en cada dispositivo)

## PASOS PARA PUBLICAR

### 1. Crear cuenta en GitHub (si no tienes)
- Ir a https://github.com
- Crear cuenta gratuita

### 2. Crear un repositorio nuevo
- Clic en "New repository"
- Nombre: "gestion-taller-dashboard" (o el que prefieras)
- Seleccionar "Public"
- NO marcar "Initialize with README"
- Clic en "Create repository"

### 3. Subir los archivos del dashboard
Opción A - Desde la interfaz web de GitHub:
- En tu repositorio, clic en "uploading an existing file"
- Arrastrar estos 3 archivos:
  * dashboard.html
  * dashboard.css
  * dashboard.js
- Clic en "Commit changes"

Opción B - Desde línea de comandos (si tienes Git):
```bash
cd "g:\Mi unidad\GESTION TALLER\public"
git init
git add dashboard.html dashboard.css dashboard.js
git commit -m "Dashboard inicial"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/gestion-taller-dashboard.git
git push -u origin main
```

### 4. Activar GitHub Pages
- En tu repositorio, ir a "Settings"
- En el menú lateral, clic en "Pages"
- En "Source", seleccionar "main" branch
- Clic en "Save"
- Esperar 1-2 minutos

### 5. Acceder al dashboard
Tu dashboard estará disponible en:
```
https://TU-USUARIO.github.io/gestion-taller-dashboard/dashboard.html
```

## CÓMO USAR EN EL TV

1. Abrir navegador en el TV
2. Ir a la URL de GitHub Pages
3. Presionar F11 para pantalla completa
4. ¡Listo! Se actualiza cada 10 segundos

## ⚠️ IMPORTANTE - SINCRONIZACIÓN DE DATOS

**PROBLEMA:** 
- Los datos se guardan en localStorage del navegador
- Cada dispositivo tendrá sus propios datos
- NO se sincronizan automáticamente entre PC y TV

**SOLUCIONES:**

### Opción 1: Usar el mismo navegador (RECOMENDADO)
- Conectar la PC al TV por HDMI
- Abrir el dashboard en la PC
- Los datos se comparten automáticamente

### Opción 2: Exportar/Importar datos manualmente
- Agregar botones de "Exportar" e "Importar" en el dashboard
- Exportar los datos como archivo JSON
- Importar en el otro dispositivo

### Opción 3: Usar un servicio de base de datos (más complejo)
- Firebase Realtime Database (gratuito hasta cierto límite)
- Supabase (alternativa open source)
- Requiere modificar el código para conectarse

## VENTAJAS DE GITHUB PAGES

✅ No necesitas permisos de administrador
✅ No necesitas instalar Python, Node.js, etc.
✅ Accesible desde internet (incluso fuera de la red local)
✅ URL permanente y fácil de compartir
✅ Actualizaciones simples (subir archivo nuevo)

## ACTUALIZAR EL DASHBOARD

Cuando hagas cambios:
1. Ir a tu repositorio en GitHub
2. Clic en el archivo a actualizar (ej: dashboard.css)
3. Clic en el ícono de lápiz (Edit)
4. Hacer los cambios
5. Clic en "Commit changes"
6. Esperar 1-2 minutos y recargar la página

## ALTERNATIVA: GitHub Gist

Si solo quieres compartir rápido sin crear repositorio:
1. Ir a https://gist.github.com
2. Pegar el contenido de dashboard.html
3. Nombrar el archivo "dashboard.html"
4. Marcar como "Public"
5. Clic en "Create public gist"
6. Usar el servicio bl.ocks.org o rawgit.com para visualizarlo

## ¿NECESITAS AYUDA?

Si prefieres, puedo:
1. Crear un archivo README.md con instrucciones
2. Preparar los archivos listos para subir
3. Mostrarte cómo agregar exportación/importación de datos
