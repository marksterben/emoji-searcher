import { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import Container from './components/Container';
import Empty from './components/Empty';

const App = () => {
  const [emojisData, setEmojisData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://run.mocky.io/v3/fe964130-70d0-430f-b839-e55081423c28');

      setEmojisData(res.data);
      setLoading(false);

    } catch (error) {
      console.error(error);

      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => getData(), []);

  return (
    <>
      <Navbar />

      <Container>
        {loading && <Empty text="Loading..." />}
        {error && <Empty text="There is an error!" />}
      </Container>
    </>
  );
};

export default App;