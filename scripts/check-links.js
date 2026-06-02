const axios = require('axios');

axios.get('https://breakingnewsenglish.com/', {
  headers: {'User-Agent': 'Mozilla/5.0 Chrome/120'},
  timeout: 15000
}).then(r => {
  const html = r.data;
  // Find all href values
  const re = /href="([^"]+)"/g;
  const links = new Set();
  let m;
  while ((m = re.exec(html)) !== null) {
    links.add(m[1]);
  }
  const arr = Array.from(links);
  // Print all that look like lesson pages
  arr.filter(l => l.includes('.html') || l.includes('/nr-') || /\/\d{4}\//.test(l)).slice(0, 80).forEach(l => console.log(l));
  console.log('\nTotal links:', arr.length);
}).catch(e => console.error(e.message));
