# Servidor HTTP Simple para Dashboard
$port = 8080
$path = "g:\Mi unidad\GESTION TALLER\public"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  SERVIDOR DASHBOARD - ALBERTO OCHOA" -ForegroundColor White
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Obtener IP local
$ip = (Get-NetIPAddress -AddressFamily IPv4 | Where-Object {$_.InterfaceAlias -notlike "*Loopback*" -and $_.IPAddress -notlike "169.254.*"}).IPAddress | Select-Object -First 1

Write-Host "Servidor iniciado en:" -ForegroundColor Green
Write-Host "  Local:    http://localhost:$port/dashboard.html" -ForegroundColor Yellow
Write-Host "  Red:      http://${ip}:$port/dashboard.html" -ForegroundColor Yellow
Write-Host ""
Write-Host "Accede desde el TV usando: http://${ip}:$port/dashboard.html" -ForegroundColor Cyan
Write-Host ""
Write-Host "Presiona Ctrl+C para detener el servidor" -ForegroundColor Gray
Write-Host ""

# Crear listener HTTP
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://+:$port/")
$listener.Start()

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        # Obtener ruta solicitada
        $urlPath = $request.Url.LocalPath
        if ($urlPath -eq "/") { $urlPath = "/dashboard.html" }
        
        $filePath = Join-Path $path $urlPath.TrimStart('/')
        
        Write-Host "[$(Get-Date -Format 'HH:mm:ss')] $($request.HttpMethod) $urlPath" -ForegroundColor Gray
        
        if (Test-Path $filePath) {
            # Determinar tipo de contenido
            $contentType = "text/html"
            if ($filePath -match "\.css$") { $contentType = "text/css" }
            elseif ($filePath -match "\.js$") { $contentType = "application/javascript" }
            elseif ($filePath -match "\.json$") { $contentType = "application/json" }
            elseif ($filePath -match "\.png$") { $contentType = "image/png" }
            elseif ($filePath -match "\.jpg$") { $contentType = "image/jpeg" }
            
            # Leer y enviar archivo
            $content = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentType = "$contentType; charset=utf-8"
            $response.ContentLength64 = $content.Length
            $response.StatusCode = 200
            $response.OutputStream.Write($content, 0, $content.Length)
        } else {
            # Archivo no encontrado
            $response.StatusCode = 404
            $errorHtml = "<h1>404 - Archivo no encontrado</h1><p>$urlPath</p>"
            $buffer = [System.Text.Encoding]::UTF8.GetBytes($errorHtml)
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
        }
        
        $response.Close()
    }
} finally {
    $listener.Stop()
    Write-Host "`nServidor detenido" -ForegroundColor Red
}
