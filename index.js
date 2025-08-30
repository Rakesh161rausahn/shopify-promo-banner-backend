// Root endpoint - serves HTML interface
import fs from 'fs';
import path from 'path';

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
    try {
      // Try to read the HTML file
      const htmlPath = path.join(process.cwd(), 'public', 'index.html');
      
      if (fs.existsSync(htmlPath)) {
        const html = fs.readFileSync(htmlPath, 'utf8');
        res.setHeader('Content-Type', 'text/html');
        res.status(200).send(html);
      } else {
        // Fallback to simple HTML if file doesn't exist
        const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Shopify Promo Banner API</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        .header { background: #667eea; color: white; padding: 20px; border-radius: 8px; text-align: center; }
        .banner { font-size: 1.5rem; margin: 10px 0; }
        .links { margin: 20px 0; }
        .btn { display: inline-block; background: #667eea; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 5px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>🚀 Shopify Promo Banner API</h1>
        <div class="banner">🎉 Free Shipping on All Orders! 🎉</div>
    </div>
    <div class="links">
        <a href="/api" class="btn">Main API</a>
        <a href="/api/health" class="btn">Health Check</a>
        <a href="/api/webhooks/uninstalled" class="btn">Webhooks</a>
    </div>
    <p>✅ API Status: Running | Version 1.0.0</p>
</body>
</html>`;
        res.setHeader('Content-Type', 'text/html');
        res.status(200).send(html);
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to load interface', details: error.message });
    }
  } else {
    res.status(405).json({ 
      error: 'Method not allowed',
      allowedMethods: ['GET'] 
    });
  }
}
