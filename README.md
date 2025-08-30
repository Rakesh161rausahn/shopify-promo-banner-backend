# Shopify Promo Banner App - Backend

Simple backend API for the Shopify promotional banner app.

## Endpoints

- `GET /api` - Main API endpoint
- `GET /api/health` - Health check
- `POST /api/webhooks/uninstalled` - App uninstalled webhook

## Deployment

Deployed on Vercel with serverless functions.

## Usage

```javascript
// Test the API
fetch('https://your-domain.vercel.app/api')
  .then(response => response.json())
  .then(data => console.log(data));
```
