import React, { useState } from 'react';
import { Box, Button, ButtonGroup, Flex, Skeleton, Text } from '@chakra-ui/react';
import { BsFillHandThumbsUpFill, BsFillHandThumbsDownFill } from 'react-icons/bs';
import { BeatLoader, SyncLoader } from 'react-spinners';
const VotePage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [eventId, setEventId] = useState('')
    return (
        <Box height='100%'
            width='100%' bg='#ffb901' padding='2rem'>
            <Flex
                direction={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                height='100%'
            >
                <Box margin='2rem 0'>
                    {isLoading ?
                        <SyncLoader size={20} color='white' /> :
                        <Text margin='1rem 0'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nostrum quas delectus? Odit amet illum minima. A molestias ipsa quidem iure? Voluptates explicabo adipisci libero beatae, perspiciatis et porro mollitia?</Text>
                    }
                </Box>
                <ButtonGroup>
                    <Button rightIcon={<BsFillHandThumbsUpFill />} spinner={<BeatLoader size={8} color='white' />} isLoading={isLoading} colorScheme='green'>Go</Button>
                    <Button rightIcon={<BsFillHandThumbsDownFill />} spinner={<BeatLoader size={8} color='white' />} isLoading={isLoading} colorScheme='red'>No Go</Button>
                </ButtonGroup>
            </Flex>
        </Box>
    )
}

export default VotePage;