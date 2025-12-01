@echo off
REM Script de inicio - Alberto Ochoa & Cia. S.A.S
REM Sistema de Gestion de Taller

echo ========================================
echo   ALBERTO OCHOA ^& CIA. S.A.S
echo   Sistema de Gestion de Taller
echo ========================================
echo.

REM Verificar si Node.js esta instalado
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js no esta instalado
    echo.
    echo Por favor, instala Node.js desde: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo [OK] Node.js detectado
node --version
echo.

REM Verificar si las dependencias estan instaladas
if not exist "node_modules\" (
    echo [INFO] Instalando dependencias...
    echo.
    call npm install
    echo.
    if %errorlevel% neq 0 (
        echo [ERROR] Fallo la instalacion de dependencias
        pause
        exit /b 1
    )
    echo [OK] Dependencias instaladas
    echo.
)

REM Obtener IP local
echo ========================================
echo   INFORMACION DE RED
echo ========================================
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do (
    set IP=%%a
    set IP=!IP: =!
    echo IP Local: !IP!
)
echo.

REM Iniciar servidor
echo ========================================
echo   INICIANDO SERVIDOR
echo ========================================
echo.
echo Presiona Ctrl+C para detener el servidor
echo.

call npm start

pause
