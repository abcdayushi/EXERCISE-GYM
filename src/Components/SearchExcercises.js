import React, { useState }  from 'react';
import { Box,   Button,   Stack,  TextField,  Typography} from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
const SearchExcercises = () => {
  const [search, setSearch] = useState("")
 
 

  const handleSearch= async () => // ASYNC = cause we have to fetch some data from it.
    { if(search) //if search exist if someone is typing
      {
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList'
          , exerciseOptions); //options help us to ake the request

       
       console.log (exercisesData);
      }
      }
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{fontSize : { lg: '44px', xs: '30px'}}}
      mb= "50px" textAlign='center'>
        Awesome Excercises <br /> You Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
        sx={{
          input: { fontWeight: '700',
            border: 'none', borderRadius:
            '4px'},
            width:{ lg: '800px', xs: '350px'},
            backgroundColor: '#fff',
            borderRadius: '40px'
        }}
         height="76px"
         value= {search}
         onChange={(e) => {setSearch(e.target.value.toLowerCase())}}
         placeholder= "Search Extension"
         type="text"/>
         <Button className='search-btn'
          sx={{
            bgcolor: '#FF2625',
            color: '#ffff',
            textTransform: 'none',
            width: {lg: '175px', xs: '80px'},
            fontSize: { lg: '20px', xs: '14px'},
           height: '56px',
          position: 'absolute',
           right: '0'}
          } onClick={handleSearch}>Search</Button>
      </Box>
    </Stack>
  )
}

export default SearchExcercises;