const { google } = require('googleapis');

const spreadsheetId = '10K_jxBDlKifTBascFaDj_u6b_gNeAgOpL_rWd1GZukY';
const credentials = require('./credentials.json');

const auth = new google.auth.JWT(credentials.client_email, null, credentials.private_key, ['https://www.googleapis.com/auth/spreadsheets.readonly']);

async function getCategories() {
  const sheets = google.sheets({ version: 'v4', auth });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: 'Categories!A:B',
  });
  return response.data.values || [];
}

async function getProducts() {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: 'Products!A:F',
  });
  const values = response.data.values || [];
  return values.map(row => ({
    id: row[0],
    name: row[1],
    description: row[2],
    price: row[3],
    imageUrl: row[4],
    categoryId: row[5],
    // ...other product details
  }));
}

// Additional functions for CRUD operations on categories and products (requires access control)

module.exports = { getCategories, getProducts };