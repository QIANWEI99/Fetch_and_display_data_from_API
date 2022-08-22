import UniList from "./UniList";
import useFetch from "./useFetch";
import { Box } from '@chakra-ui/react';

const Home = () => {
  const { data: unis, isPending, error} = useFetch('http://universities.hipolabs.com/search?country=Malaysia');

  return (
    <Box>
      { error && <Box>{ error }</Box>}
      { isPending && <Box>Loading...</Box> }
      {unis && <UniList unis={unis} title="University List" />}
    </Box>
  );
}
 
export default Home;