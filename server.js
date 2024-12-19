const express = require('express');
const axios = require('axios');
const cors = require('cors'); // CORSをインポート

const app = express();
const PORT = 5000;

const NEWS_API_KEY = '5d825a5d09af4d38a20aa46f8864efe5';
const NEWS_API_URL = 'https://newsapi.org/v2/everything';

app.use(cors()); // CORSを有効化

app.get('/search', async (req, res) => {
    const query = req.query.q;
    if (!query) {
        return res.status(400).json({ error: 'キーワードが必要です' });
    }

    try {
        console.log(`検索キーワード: ${query}`);
        const response = await axios.get(NEWS_API_URL, {
            params: {
                q: query,
                apiKey: NEWS_API_KEY,
            },
        });
        res.json(response.data.articles);
    } catch (error) {
        console.error('ニュースの取得に失敗しました:', error.response?.data || error.message);
        res.status(500).json({
            error: 'ニュースの取得に失敗しました',
            details: error.response?.data || error.message,
        });
    }
});

app.listen(PORT, () => {
    console.log(`サーバーが http://localhost:${PORT} で起動中です`);
});
