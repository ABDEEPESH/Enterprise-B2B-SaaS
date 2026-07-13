# Set MongoDB URI with proper escaping
$env:SPRING_DATA_MONGODB_URI = "mongodb+srv://ABDEEPESH:A%40b_deepesh27102005@cluster0.zouwsq7.mongodb.net/enterprise_b2b_platform?retryWrites=true&w=majority"

Write-Host "MongoDB URI configured: $env:SPRING_DATA_MONGODB_URI"
Write-Host "Starting Spring Boot application..."

# Find Maven
$mavenPaths = @(
    ".\apache-maven-3.9.4\bin\mvn.cmd",
    "C:\Users\91916\AppData\Local\Temp\vscode-maven-91916\bin\mvn.cmd",
    "C:\Program Files\Apache\Maven\bin\mvn.cmd",
    "mvn"
)

$mavenCmd = $null
foreach ($path in $mavenPaths) {
    if (Test-Path $path) {
        $mavenCmd = $path
        Write-Host "Found Maven at: $path"
        break
    }
}

if ($mavenCmd) {
    & $mavenCmd spring-boot:run
} else {
    Write-Host "ERROR: Maven not found. Please install Maven or add to PATH."
    exit 1
}
