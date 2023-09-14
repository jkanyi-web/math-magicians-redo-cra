import React, { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.headers.common['X-Api-Key'] = 'X0RJf1RjhctUxTka7UQisg==TgVq8OcBO5Lh3LUw';

export default function Quotes() {
  const [quote, setQuote] = useState('Loading...');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get('https://api.api-ninjas.com/v1/quotes?category=success');
        if (response.status === 200) {
          setQuote(response.data[0].quote);
        }
      } catch (e) {
        setError('An error occurred while fetching the quote.');
      }
    };

    fetchQuote();
  }, []);

  return (
    <div>
      <h1>{quote}</h1>
      {error && <h3>{error}</h3>}
    </div>
  );
}
