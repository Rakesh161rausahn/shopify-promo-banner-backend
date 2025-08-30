// Root endpoint - redirects to API
export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    res.status(200).json({
      message: "Shopify Promo Banner Backend API",
      status: "running",
      app: "promo-banner-app",
      banner: "🎉 Free Shipping on All Orders! 🎉",
      endpoints: {
        main: "/api",
        health: "/api/health", 
        webhooks: "/api/webhooks/uninstalled"
      },
      documentation: "Visit /api for main API endpoint",
      timestamp: new Date().toISOString(),
      version: "1.0.0"
    });
  } else {
    res.status(405).json({ 
      error: 'Method not allowed',
      allowedMethods: ['GET'] 
    });
  }
}
