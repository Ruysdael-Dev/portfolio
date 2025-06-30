#!/usr/bin/env bash
#
# Usage: ./deploy.sh "Mensagem de commit"
# Funciona no Git Bash do Windows (e no Linux/macOS).

set -e

MSG=${1:-"Atualização do portfólio"}

echo "==> 1) git pull (rebase) para manter seu local atualizado"
git pull origin main --rebase

echo "==> 2) git add ."
git add .

# Checa se há algo para commitar
if [ -n "$(git status --porcelain)" ]; then
  echo "==> 3) git commit -m \"$MSG\""
  git commit -m "$MSG"
else
  echo "==> Nada a commitar, pulando git commit"
fi

echo "==> 4) git push origin main"
git push origin main

echo "✅ Deploy concluído!"
