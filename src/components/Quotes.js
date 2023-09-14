import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.headers.get['X-Api-Key'] = 'X0RJf1RjhctUxTka7UQisg==TgVq8OcBO5Lh3LUw';

export default function Quotes() {
  const [loading, setLoading] = useState('Loading...');
  const [error, setError] = useState('');

  const FetchQuotes = () => {
    axios
      .get('https://api.api-ninjas.com/v1/quotes?category=success')
      .then((res) => {
        if (res.status === 200) {
          setLoading(res.data[0].quote);
        }
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  useEffect(() => {
    FetchQuotes();
  }, []);

  return (
    <div>
      <h1>{loading}</h1>
      <h3>{error}</h3>
    </div>
  );
}
