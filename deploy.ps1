param(
  [string]$Message = "Atualização do portfólio"
)

Write-Host "1) Adicionando arquivos..."
git add .

Write-Host "2) Commitando com a mensagem: '$Message'"
git commit -m $Message

Write-Host "3) Enviando para o GitHub..."
git push origin main

Write-Host "✅ Deploy concluído!"
