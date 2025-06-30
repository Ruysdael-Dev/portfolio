#!/usr/bin/env bash
#
# Usage: ./deploy.sh "Mensagem de commit"
# (funciona no Git Bash)

set -e

MSG=${1:-"Atualização do portfólio"}

echo "==> 1) git add ."
git add .

# Se há mudanças, commita
if [ -n "$(git status --porcelain)" ]; then
  echo "==> 2) git commit -m \"$MSG\""
  git commit -m "$MSG"
else
  echo "==> Nada a commitar, pulando commit"
fi

echo "==> 3) git pull origin main --rebase"
git pull origin main --rebase

echo "==> 4) git push origin main"
git push origin main

echo "✅ Deploy concluído!"
