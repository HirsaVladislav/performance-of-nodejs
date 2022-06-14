const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`App started on http://localhost:${port}/`)
});

const appRoutes = require('./src/routing/routes');
const { createHomePage } = require('./src/handlers/homePage');

app.use('/api', appRoutes);
app.get('*', async (req, res) => {
  const homePage = await createHomePage();
  res.set('Content-Type', 'text/html');
  res.send(homePage);
});
