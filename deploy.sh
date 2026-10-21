#!/usr/bin/env bash
# Build the static site and publish it to the `deploy` branch (Hostinger pulls this branch).
set -euo pipefail
cd "$(dirname "$0")"
rm -rf dist
NODE_ENV=production SITE_URL=https://relationshipgoals.store npm run build
OUT=dist/apps/web/client
SHA=$(git rev-parse --short HEAD)
TMP=$(mktemp -d)
cp -a "$OUT"/. "$TMP"/
cd "$TMP"
git init -q -b deploy
git add -A
git -c user.name="Relationship Goals deploy" -c user.email="deploy@relationshipgoals.store" commit -q -m "deploy: $SHA"
git push -f "$(git -C "$OLDPWD" remote get-url origin)" deploy:deploy
echo "Deployed $SHA to deploy branch"
