import React, { useState } from 'react';
import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react';
import {Navigate } from 'react-router-dom';
const WelcomePage = () => {
    const [userName,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [userId,setUserId] = useState('');
    const [isError,setError] = useState(false);

    const register = async ()=>{
        if(userName === ''){
            console.log('error')
            return setError(true);
        }
        const newUserReq = await  fetch("https://aicalendarbackend.azurewebsites.net/api/Users",{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName,
                "realUser":false,
                email
                }),
            });
            try{
                const newUserRes = await newUserReq.json()
                localStorage.setItem('userId', newUserRes['id'])
                setUserId(newUserRes['id'])
            }
            catch (err){
                const userIdReq = await fetch(`https://aicalendarbackend.azurewebsites.net/api/Users/username/${userName}`)
                const userIdRes = await userIdReq.json();
                localStorage.setItem('userId', userIdRes['id'])
                setUserId(userIdRes['id'])
            }
    }
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
                 placeholder='Username'
                  margin='1rem 0'
                  value={userName}
                  required
                  background='white'
                  maxWidth={'350px'}
                //   errorBorderColor={'red'}
                  onChange={(e)=>{setUserName(e.target.value)}}
                  isInvalid={isError}
                  ></Input>
                                  <Input
                 placeholder='Mail (optional)'
                  value={email}
                  background='white'
                  maxWidth={'350px'}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  ></Input>
                    <Button margin='1rem 0' colorScheme='green' onClick={register}>I want to help!</Button>
                {userId!=='' && <Navigate to="/vote"/>}
        </Flex>
    </Box>
    );
}

export default WelcomePage;