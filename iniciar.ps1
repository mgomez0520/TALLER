# Script de Inicio - Alberto Ochoa & Cía. S.A.S
# Sistema de Gestión de Taller

Write-Host "========================================" -ForegroundColor Red
Write-Host "   ALBERTO OCHOA & CÍA. S.A.S" -ForegroundColor White
Write-Host "   Sistema de Gestión de Taller" -ForegroundColor White
Write-Host "========================================" -ForegroundColor Red
Write-Host ""

# Verificar Node.js
Write-Host "[INFO] Verificando Node.js..." -ForegroundColor Cyan
try {
    $nodeVersion = node --version
    Write-Host "[OK] Node.js $nodeVersion detectado" -ForegroundColor Green
} catch {
    Write-Host "[ERROR] Node.js no está instalado" -ForegroundColor Red
    Write-Host "Por favor, instala Node.js desde: https://nodejs.org/" -ForegroundColor Yellow
    pause
    exit 1
}

Write-Host ""

# Verificar dependencias
if (!(Test-Path "node_modules")) {
    Write-Host "[INFO] Instalando dependencias..." -ForegroundColor Cyan
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[ERROR] Falló la instalación de dependencias" -ForegroundColor Red
        pause
        exit 1
    }
    Write-Host "[OK] Dependencias instaladas" -ForegroundColor Green
} else {
    Write-Host "[OK] Dependencias ya instaladas" -ForegroundColor Green
}

Write-Host ""

# Obtener IP local
Write-Host "========================================" -ForegroundColor Red
Write-Host "   INFORMACIÓN DE RED" -ForegroundColor White
Write-Host "========================================" -ForegroundColor Red

$ipAddress = (Get-NetIPAddress -AddressFamily IPv4 | Where-Object {$_.InterfaceAlias -notmatch "Loopback" -and $_.IPAddress -notmatch "^169"} | Select-Object -First 1).IPAddress

if ($ipAddress) {
    Write-Host "IP Local: $ipAddress" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Accede desde:" -ForegroundColor Cyan
    Write-Host "  - Esta PC: http://localhost:3000" -ForegroundColor White
    Write-Host "  - Móvil/Tablet: http://${ipAddress}:3000" -ForegroundColor White
} else {
    Write-Host "No se pudo detectar la IP local" -ForegroundColor Yellow
}

Write-Host ""

# Verificar puerto
Write-Host "[INFO] Verificando puerto 3000..." -ForegroundColor Cyan
$portInUse = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
if ($portInUse) {
    Write-Host "[ADVERTENCIA] El puerto 3000 está en uso" -ForegroundColor Yellow
    Write-Host "Cerrando proceso anterior..." -ForegroundColor Yellow
    $portInUse | ForEach-Object {
        Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue
    }
    Start-Sleep -Seconds 2
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Red
Write-Host "   INICIANDO SERVIDOR" -ForegroundColor White
Write-Host "========================================" -ForegroundColor Red
Write-Host ""
Write-Host "Presiona Ctrl+C para detener el servidor" -ForegroundColor Yellow
Write-Host ""

# Iniciar servidor
npm start
