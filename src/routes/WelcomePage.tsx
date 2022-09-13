import React, { useState } from 'react';
import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react';
import {Link} from 'react-router-dom';

const WelcomePage = () => {
    const [alias,setAlias] = useState('')
    return(
    <Box height='100%'
    width='100%' bg='#01a4ef' padding='2rem'>
        <Flex
            direction={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            height='100%'
            >
                <Heading as='h1' size={'3xl'} color='white'>hello</Heading>
                <Text margin='1rem 0'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nostrum quas delectus? Odit amet illum minima. A molestias ipsa quidem iure? Voluptates explicabo adipisci libero beatae, perspiciatis et porro mollitia?</Text>
                <Input
                 placeholder='Alias (Optional)'
                  margin='1rem 0'
                  value={alias}
                  background='white'
                  onChange={(e)=>setAlias(e.target.value)}
                  ></Input>
                  <Link to='/vote'>
                    <Button colorScheme='green'>Start</Button>
                  </Link>

        </Flex>
    </Box>
    );
}

export default WelcomePage;