Add-Type -AssemblyName System.Drawing
function Resize-Image($path, $outPath) {
    if (Test-Path $path) {
        $img = [System.Drawing.Image]::FromFile((Resolve-Path $path).Path)
        $ratio = $img.Width / $img.Height
        $newWidth = [math]::Min($img.Width, 1920)
        $newHeight = [math]::Round($newWidth / $ratio)
        $bmp = new-object System.Drawing.Bitmap($newWidth, $newHeight)
        $graph = [System.Drawing.Graphics]::FromImage($bmp)
        $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graph.DrawImage($img, 0, 0, $newWidth, $newHeight)
        $bmp.Save((Resolve-Path -Path ".").Path + "\" + $outPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
        $graph.Dispose()
        $bmp.Dispose()
        $img.Dispose()
        Write-Host "Optimized $path to $outPath"
    } else {
        Write-Host "File not found: $path"
    }
}
Resize-Image "public\services\Demolition Works.png" "public\services\demolition-works.jpg"
Resize-Image "public\services\tractor jack hammer blasting 1.png" "public\services\tractor-jack-hammer.jpg"
