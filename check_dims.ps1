Add-Type -AssemblyName System.Drawing
1..15 | ForEach-Object {
    $path = "public/gallery/photos/photo$_.jpeg"
    if (Test-Path $path) {
        $img = [System.Drawing.Image]::FromFile((Resolve-Path $path).Path)
        Write-Host "photo$_ : $($img.Width) x $($img.Height)"
        $img.Dispose()
    }
}
