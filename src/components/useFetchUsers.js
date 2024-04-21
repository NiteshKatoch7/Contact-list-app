import { useEffect, useState } from 'react'

export default function useFetchUsers(url) {
  // Setting three states: 
  // data ---- for the list of users that we are going to fetch.
  // isLoading ---- for show the loader untill the data for user is fetch using asynchronus process, to maintain good ux for users.
  // error ---- to show the users error if the fetch fails to retreives the users data, again for better ux experience.

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(()=>{

    //Using async/await fro asynchronous fetching of users data.
    const fetchData = async () => {
      try{
        const data = await fetch(url);

        if(!data.ok){
          // Throw Error if the data is not reteived from the url.
          throw new Error('Failed to fetch data');
        }

        const jsonData = await data.json();
        
        setData(jsonData);
        setLoading(false);
      }catch(error){
        setError(error);
        setLoading(false);
      }
    }

    fetchData();

    return () => {
      // We can write a cleanup function to cancel the fetch request if the component is unmounted.
    };

  }, [url]) // Fetching the data whenever the URL changes

  //Return the data
  return { data, isLoading, error };
}

