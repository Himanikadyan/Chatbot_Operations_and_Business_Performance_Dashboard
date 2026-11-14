# Chatbot Operations & Business Performance Dashboard

A Google Apps Script web app that shows multiple dashboards (Looker Studio, etc.) in tabs inside one portal.

## How it works
- The first sheet of the bound Google Spreadsheet holds the dashboard list.
- Column A = Title, Column B = Dashboard URL (row 1 is the header).
- `Code.gs` reads the sheet and `Index.html` renders each row as a tab with an iframe.

## Setup
1. Open the Google Sheet > Extensions > Apps Script.
2. Add `Code.gs` and `Index.html` from this repo.
3. Deploy > New deployment > Web app.

## Sheet format
| Title | URL |
|-------|-----|
| Sales | https://... |
| Ops   | https://... |