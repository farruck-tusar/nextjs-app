// components/RandomQuote.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const RandomQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchRandomQuote = async () => {
      try {
        const response = await axios.get('https://api.quotable.io/random');
        setQuote(response.data.content);
      } catch (error) {
        console.error('Error fetching random quote:', error);
      }
    };

    fetchRandomQuote();
  }, []);

  return (
    <div>
      <h2>Random Quote</h2>
      <blockquote>{quote}</blockquote>
    </div>
  );
};

export default RandomQuote;
