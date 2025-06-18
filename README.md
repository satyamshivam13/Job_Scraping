
# 🛠️ Job Scraper

This is a Node.js-based web scraping application that scrapes remote developer jobs from [RemoteOK](https://remoteok.com/remote-dev-jobs) using Puppeteer and serves the data through an Express.js API.

## 📦 Tech Stack

- **Node.js**: Runtime environment
- **Express.js**: Server framework
- **Puppeteer**: Headless browser for web scraping
- **Cheerio**: jQuery-like HTML parsing
- **Axios**: HTTP client
- **CORS**: Cross-origin resource sharing middleware

## 🚀 Features

- Scrapes job title, company name, location, and application link.
- API endpoint: `/api/jobs` returns an array of job listings in JSON format.
- Minimal setup with a simple Express server.
- Development-friendly with `nodemon`.

## 📁 Project Structure

```
job-scraper/
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## 🔧 Setup & Run

### 1. Clone the repository

```bash
git clone https://github.com/satyamshivam13/job-scraper.git
cd job-scraper
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the server

#### In production:
```bash
npm start
```

#### In development (with auto-reload):
```bash
npm run dev
```

### 4. Test API

Open browser or use Postman:
```
GET http://localhost:3000/api/jobs
```

## 🔐 .gitignore

This project ignores:
- `node_modules/`

## 📬 Contact

- **Developer**: Satyam Shivam
- **Email**: shivamsatyam35@gmail.com
- **GitHub**: [@satyamshivam13](https://github.com/satyamshivam13)

---

> Made with  using Puppeteer & Express
