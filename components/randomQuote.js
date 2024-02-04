"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './RandomQuote.module.css';

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

    // Fetch the initial quote
    fetchRandomQuote();

    // Set up interval to fetch a new quote every two seconds
    const intervalId = setInterval(() => {
      fetchRandomQuote();
    }, 2000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div className={styles.randomQuoteContainer}>
      <h2 className={styles.randomQuoteTitle}>Random Quote</h2>
      <blockquote className={styles.randomQuote}>{quote}</blockquote>
    </div>
  );
};

export default RandomQuote;
