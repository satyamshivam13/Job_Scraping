  const express = require('express');
  const axios = require('axios');
  const cheerio = require('cheerio');
  const cors = require('cors');
  const puppeteer = require('puppeteer');
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.static('public'));

  app.get('/test', (req, res) => {
    res.send('working...');
  });

app.get('/api/jobs', async (req, res) => {
  try {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.goto('https://remoteok.com/remote-dev-jobs', { waitUntil: 'networkidle2' });

    const jobs = await page.evaluate(() => {
      const jobElements = document.querySelectorAll('#jobsboard .job');
      const data = [];

      jobElements.forEach(job => {
        const title = job.querySelector('h2')?.innerText.trim();
        const company = job.querySelector('.companyLink h3')?.innerText.trim();
        const location = job.querySelector('.location')?.innerText.trim();
        const link = 'https://remoteok.com' + job.getAttribute('data-href');

        if (title && company) {
          data.push({ title, company, location, link });
        }
      });

      return data;
    });

    await browser.close();
    res.json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to fetch jobs');
  }
});

  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
