Add-Type -AssemblyName System.Drawing
$portraits = 1, 2, 4, 8, 9, 10, 14
foreach ($i in $portraits) {
    $path = "public/gallery/photos/photo$i.jpeg"
    if (Test-Path $path) {
        Write-Host "Rotating $path..."
        $img = [System.Drawing.Image]::FromFile((Resolve-Path $path).Path)
        
        # Rotate 270 degrees (90 counter-clockwise)
        $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone)
        
        $tempPath = "public/gallery/photos/temp_photo$i.jpeg"
        $img.Save((Resolve-Path "public/gallery/photos/").Path + "\temp_photo$i.jpeg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
        $img.Dispose()
        
        # Overwrite original
        Move-Item -Path $tempPath -Destination $path -Force
    }
}
Write-Host "Done!"
