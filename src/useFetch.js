import { useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
          fetch(url)
          .then(res => {
            console.log(res);
            if(!res.ok){
              console.log(res);
              throw Error('erm... sorry we could not fetch the data for that resource ¯\_(ツ)_/¯')
            }
            return res.json();
          })
          .then((data) => {
            setData(data);
            setIsLoading(false);
            setError(null);
          })
          .catch((error) => {
            setIsLoading(false);
            setError(error.message);
          })
        }, 1000)
      }, []);
      
    return { data, isLoading, error }
}
 
export default useFetch;