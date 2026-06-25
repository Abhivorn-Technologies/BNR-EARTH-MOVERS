Add-Type -AssemblyName System.Drawing
$path = "public/machinery/Pile Load Testing Equipment.jpg"

if (Test-Path $path) {
    # Load original image
    $img = [System.Drawing.Image]::FromFile((Resolve-Path $path).Path)
    
    # Define crop rectangle based on our bounds scan
    $cropRect = New-Object System.Drawing.Rectangle(90, 0, 270, 447)
    
    # Create new bitmap with crop dimensions
    $bmp = New-Object System.Drawing.Bitmap($cropRect.Width, $cropRect.Height)
    $graphics = [System.Drawing.Graphics]::FromImage($bmp)
    
    # Draw cropped section
    $destRect = New-Object System.Drawing.Rectangle(0, 0, $bmp.Width, $bmp.Height)
    $graphics.DrawImage($img, $destRect, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)
    
    # Clean up original to allow overwrite
    $img.Dispose()
    $graphics.Dispose()
    
    # Save cropped image back to the same path
    $bmp.Save((Resolve-Path $path).Path, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $bmp.Dispose()
    
    Write-Host "Successfully cropped Pile Load Testing Equipment.jpg!"
}
