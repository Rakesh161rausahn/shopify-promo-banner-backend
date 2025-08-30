# Shopify Promo Banner App - Backend

Simple backend API for the Shopify promotional banner app.

## Endpoints

- `GET /api` - Main API endpoint
- `GET /api/health` - Health check
- `POST /api/webhooks/uninstalled` - App uninstalled webhook

## Deployment

Deployed on Vercel with serverless functions.

## Live URLs

- **Production API:** https://shopify-promo-banner-backend-4m7odf2x8.vercel.app/api
- **Health Check:** https://shopify-promo-banner-backend-4m7odf2x8.vercel.app/api/health

## Usage

```javascript
// Test the API
fetch('https://shopify-promo-banner-backend-4m7odf2x8.vercel.app/api')
  .then(response => response.json())
  .then(data => console.log(data));
```

## Repository

Backend code for the Shopify promotional banner app that displays "🎉 Free Shipping on All Orders! 🎉" at the top of Shopify stores.
