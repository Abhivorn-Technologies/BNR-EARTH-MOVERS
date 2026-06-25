Add-Type -AssemblyName System.Drawing
$path = "public/machinery/Pile Load Testing Equipment.jpg"
if (Test-Path $path) {
    $img = [System.Drawing.Image]::FromFile((Resolve-Path $path).Path)
    Write-Host "Width: $($img.Width), Height: $($img.Height)"
    
    # Check pixels at the middle left and middle right
    $bmp = new-object System.Drawing.Bitmap($img)
    $leftPixel = $bmp.GetPixel(5, $bmp.Height / 2)
    $rightPixel = $bmp.GetPixel($bmp.Width - 5, $bmp.Height / 2)
    Write-Host "Left Pixel: $($leftPixel.R), $($leftPixel.G), $($leftPixel.B)"
    Write-Host "Right Pixel: $($rightPixel.R), $($rightPixel.G), $($rightPixel.B)"
    
    $bmp.Dispose()
    $img.Dispose()
} else {
    Write-Host "File not found"
}
