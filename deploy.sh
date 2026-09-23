#!/usr/bin/env bash
set -e
cd /var/www/DirectVoyage
echo "Deploying Direct Voyage..."
git pull origin main
npm ci
npm run build
npm test
chown -R www-data:www-data /var/www/DirectVoyage
systemctl reload nginx
echo "Deployment completed successfully!"
