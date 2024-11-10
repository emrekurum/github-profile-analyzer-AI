require('dotenv').config();
const express = require('express');
const cors = require('cors'); // CORS kütüphanesini dahil ettik
const { OpenAI } = require("openai");

const app = express();
const port = 5000;

// CORS'u aktif hale getiriyoruz
app.use(cors());  // Tüm gelen istekler için CORS izin verildi

// OpenAI API Configuration
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(express.json());

app.post('/analyzeProfile', async (req, res) => {
  const { profileData } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: `Analyze the following GitHub profile and provide a detailed comment about this user and their skills:\n\nProfile: ${profileData}` },
      ],
    });

    const comment = completion.choices[0].message.content.trim();
    res.json({ comment });
  } catch (error) {
    console.error('Error with OpenAI API:', error); // Hata detaylarını daha iyi görmek için logları ekledik
    res.status(500).json({ message: 'Error generating comment', error: error.message, stack: error.stack });  // Hata mesajı ve stack trace'i frontend'e gönderiyoruz
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
