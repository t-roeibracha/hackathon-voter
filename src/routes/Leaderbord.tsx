import React, { useState, useEffect } from 'react';
import { Box, Button, ButtonGroup, Flex, Heading, Table, TableContainer,Tr, Th, Thead, Tbody, Td } from '@chakra-ui/react';
import {SyncLoader } from 'react-spinners';
import { useNavigate } from "react-router-dom";

interface User {
    userName:string,
    score:number,
}


const Leadrboard = () =>{
    const [isLoading, setIsLoading] = useState(true);
    const [users,setUsers] = useState<User[]>([]);
    const navigate = useNavigate();
    useEffect(()=>{
        fetch("https://aicalendarbackend.azurewebsites.net/api/Users/leaderboard").then((req)=>{
            req.json().then((res)=>{
                setUsers(res);
                setIsLoading(false)
            })
        })
    },[])
    return (
        <Box height='100%'
            width='100%' bg='purple.400' padding='2rem'>
            <Flex
                direction={'column'}
                justifyContent={'space-around'}
                alignItems={'center'}
                height='100%'
            >
                <Heading color={'white'}>Leaderboard</Heading>
                <Box margin='2rem 0'>
                    {isLoading ?
                        <SyncLoader size={20} color='white' /> :
                        <TableContainer backgroundColor={"white"}>
                            <Table variant='striped' colorScheme={"purple"}>
                                <Thead>
                                    <Tr>
                                        <Th>Username</Th>
                                        <Th>Score</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {users.map((user)=>(
                                        <Tr>
                                            <Td>{user.userName}</Td>
                                            <Td isNumeric>{user.score}</Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    }
                </Box>
                <Flex direction={'column'} justifyContent={'space-around'} alignItems={'center'}>
                    <ButtonGroup margin='2rem 0'>
                        <Button onClick={()=> navigate(-1)}>Back</Button>
                    </ButtonGroup>
                </Flex>
            </Flex>
        </Box>
    )
}
 
export default Leadrboard