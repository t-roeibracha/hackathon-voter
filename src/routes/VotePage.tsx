import React, { useState, useEffect } from 'react';
import { Box, Button, ButtonGroup, Flex, Heading, Text } from '@chakra-ui/react';
import { BsFillHandThumbsUpFill, BsFillHandThumbsDownFill } from 'react-icons/bs';
import { MdLeaderboard } from 'react-icons/md';
import { BeatLoader, SyncLoader } from 'react-spinners';
const VotePage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [event,setEvent] = useState<{id: string; title: string, description: string}>();
    const getEvent = ()=>{
        setIsLoading(true)
        setTimeout(()=>{
            setEvent({
                "id":"1",
                "title":"Title",
                "description":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nostrum quas delectus? Odit amet illum minima. A molestias ipsa quidem iure? Voluptates explicabo adipisci libero beatae, perspiciatis et porro mollitia?"
            })
            setIsLoading(false)
        },1000)
    }
    const vote = (ans:boolean)=>{
        getEvent();
    }
    useEffect(getEvent,[])
    return (
        <Box height='100%'
            width='100%' bg='purple.400' padding='2rem'>
            <Flex
                direction={'column'}
                justifyContent={'space-around'}
                alignItems={'center'}
                height='100%'
            >
                <Box margin='2rem 0'>
                    {isLoading ?
                        <SyncLoader size={20} color='white' /> :
                        <Flex
                            direction={'column'}
                            justifyContent={'space-around'}
                            alignItems={'center'}>
                            <Heading margin='2rem 0'color={'white'}>{event?.title}</Heading>
                            <Text color={'white'} margin='1rem 0'>{event?.description}</Text>
                        </Flex>
                    }
                </Box>
                <Flex direction={'column'} justifyContent={'space-around'} alignItems={'center'}>
                    <ButtonGroup>
                        <Button onClick={()=>vote(true)} rightIcon={<BsFillHandThumbsUpFill />} spinner={<BeatLoader size={8} color='white' />} isLoading={isLoading} colorScheme='green'>I'm interested!</Button>
                        <Button onClick={()=>vote(false)} rightIcon={<BsFillHandThumbsDownFill />} spinner={<BeatLoader size={8} color='white' />} isLoading={isLoading} colorScheme='red'>Not my type</Button>
                    </ButtonGroup>
                    <ButtonGroup margin='2rem 0'>
                        <Button rightIcon={<MdLeaderboard/>}>Leaderbord</Button>
                    </ButtonGroup>
                </Flex>

            </Flex>
        </Box>
    )
}

export default VotePage;