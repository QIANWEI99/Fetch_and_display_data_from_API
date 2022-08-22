import { Box , Grid, Wrap, WrapItem } from '@chakra-ui/react';
  
const UniList = ({ unis }) => {
    return (
        
        <Grid 
        templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)','repeat(5, 1fr)']} 
        gap={6}
        >
        {
            unis.map(uni => (
                <Box key={uni.domains} 
                padding='10px 16px'
                margin='20px 0'
                bg='grey'
                boxShadow='md'
                rounded='md'
                backgroundColor='white'>
                    <h2>Domains: {uni.domains}</h2>
                    <p>Alpha_two_code: {uni.alpha_two_code}</p>
                    <p>Country: {uni.country}</p>
                    <p>Webpages: {uni.web_pages}</p>
                    <p>Name: {uni.name}</p>
                    <p>State province: {uni.state_province}</p>
                </Box>
            ))
        }
        </Grid>
    );
}

export default UniList;