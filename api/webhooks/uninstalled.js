// App uninstalled webhook handler
export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  if (req.method === 'POST') {
    console.log('App uninstalled webhook received:', req.body);
    res.status(200).json({ 
      received: true,
      message: 'App uninstalled webhook processed'
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
