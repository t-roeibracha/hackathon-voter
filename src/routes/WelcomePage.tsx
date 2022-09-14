import React, { useState } from 'react';
import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react';
import {Link} from 'react-router-dom';

const WelcomePage = () => {
    const [alias,setAlias] = useState('')
    return(
    <Box height='100%'
    width='100%' bg='purple.400' padding='2rem'>
        <Flex
            direction={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            height='100%'
            >
                <Heading as='h1' textAlign={"center"} size={'3xl'} color='white' alignContent={"center"}>Welcome to activi-tinder</Heading>
                <Text color={'white'} align="center" margin='1rem 0'>want to help us develop an AI-based calender for adults?</Text>
                <Text color={'white'} align="center" margin='1rem 0'>Rate as many activities as you can, earn a good karma and a tasty chocolate</Text>
                <Input
                 placeholder='Alias (Optional)'
                  margin='1rem 0'
                  value={alias}
                  background='white'
                  onChange={(e)=>setAlias(e.target.value)}
                  ></Input>
                  <Link to='/vote'>
                    <Button colorScheme='green'>I want to help!</Button>
                  </Link>

        </Flex>
    </Box>
    );
}

export default WelcomePage;