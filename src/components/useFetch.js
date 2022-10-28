import {useState, useEffect } from 'react';


function useFetch(url) {
  const [ data, setData ] = useState();
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);
  
  async function getData(url)  {
    try {
      const res = await fetch(url);
      const getRes = await res.json();
      setData(getRes)
    } catch(error) {
      setLoading(false)
      setError(error.message)
      
    } finally {
      setLoading(false)
    }
  }

    useEffect(() => {
     getData(url);
    }, [url]);


    return (
      {data, loading, error}
    );
};

export default useFetch;