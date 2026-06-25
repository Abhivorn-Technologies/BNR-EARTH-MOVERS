Add-Type -AssemblyName System.Drawing
$path = "public/machinery/Pile Load Testing Equipment.jpg"
if (Test-Path $path) {
    $img = [System.Drawing.Image]::FromFile((Resolve-Path $path).Path)
    $bmp = new-object System.Drawing.Bitmap($img)
    
    $minX = $bmp.Width
    $maxX = 0
    $minY = $bmp.Height
    $maxY = 0
    
    # Simple scan to find non-white pixels
    for ($y = 0; $y -lt $bmp.Height; $y += 5) {
        for ($x = 0; $x -lt $bmp.Width; $x += 5) {
            $pixel = $bmp.GetPixel($x, $y)
            if ($pixel.R -lt 250 -or $pixel.G -lt 250 -or $pixel.B -lt 250) {
                if ($x -lt $minX) { $minX = $x }
                if ($x -gt $maxX) { $maxX = $x }
                if ($y -lt $minY) { $minY = $y }
                if ($y -gt $maxY) { $maxY = $y }
            }
        }
    }
    
    Write-Host "Non-white bounds: minX=$minX, maxX=$maxX, minY=$minY, maxY=$maxY"
    
    $bmp.Dispose()
    $img.Dispose()
}
