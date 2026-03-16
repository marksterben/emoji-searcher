import { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import Container from './components/Container';
import Empty from './components/Empty';
import Emojis from './components/Emojis';
import Input from './components/Input';

const App = () => {
  const [emojisData, setEmojisData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get('/data.json');

      setEmojisData(res.data);
      setLoading(false);

    } catch (error) {
      console.error(error);

      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => getData(), []);

  const handleSearchEmojis = (e) => setSearchText(e.target.value);

  return (
    <>
      <Navbar />

      <Container>
        <Input onChange={handleSearchEmojis} value={searchText} />

        {loading && <Empty text="Loading..." />}
        {error && <Empty text="There is an error!" />}
        {emojisData.length > 0 && <Emojis emojisData={emojisData} searchText={searchText} />}
      </Container>
    </>
  );
};

export default App;
