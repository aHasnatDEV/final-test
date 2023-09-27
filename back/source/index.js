const express = require('express');
require("dotenv").config();
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 8000;
const token = process.env.GIT_TOKEN;

app.use(express.json());
app.use(cors());

const config = {
  headers: {
    'Authorization': `Bearer ${token}`
  }
};

app.get('/', async (req, res) => {
  try {
    const owner = 'nodejs';
    const repo = 'node-v0.x-archive';

    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits?sha=master&per_page=25`, config);

    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching commit data');
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
