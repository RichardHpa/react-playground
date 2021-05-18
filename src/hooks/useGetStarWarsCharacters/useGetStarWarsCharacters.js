import { useQuery } from 'react-query';
import axios from 'axios';

const useGetStarWarsCharacters = () => {
  const { status, data, error, isLoading, ...rest } = useQuery('characters', async () => {
    const { data: resData } = await axios.get('https://swapi.dev/api/people/');
    return resData;
  });

  return { data, status, isLoading, ...rest };
};

export default useGetStarWarsCharacters;
