import React from 'react';
import Home from './Home';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Box>
      <Box 
      align='center' 
      my='60px' 
      fontSize='40px'>
      <h1>University List</h1>
      </Box>

      <Box 
      fontSize="l"
      mx='100px'>
        <Home />
      </Box>
    </Box>
  );
}

export default App;
