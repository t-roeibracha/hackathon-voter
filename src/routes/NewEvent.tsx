import React, { useState } from "react";
import { Box, Button, ButtonGroup, Flex, Heading, Input, Textarea } from '@chakra-ui/react';
const NewEventPage = ()=>{
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [errorStart, setErrorStart] = useState(false);
    const [errorEnd, setErrorEnd] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);

    const validateTime = ()=> {
        const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
        setErrorEnd(!timeRegex.test(endTime));
        setErrorStart(!timeRegex.test(startTime));
    }
    const addEvent = ()=>{
        validateTime();
        setNameError(name === '');
        setDescriptionError(description === '');
        if (!name && !descriptionError && !setErrorEnd && !setErrorStart){
        }
    }
    return(
        <Box height='100%'
            width='100%' bg='purple.400' padding='2rem'>
            <Flex
                direction={'column'}
                justifyContent={'space-around'}
                alignItems={'center'}
                height='100%'
            >
                <Heading color={'white'}>Create Event</Heading>
                <Flex direction={'column'} justifyContent={'space-around'} alignItems={'center'}>
                        <Input isInvalid={nameError} backgroundColor='white' placeholder="Name" margin={'1rem 0'} value={name} onChange={(e)=>setName(e.target.value)}/>
                        <Textarea isInvalid={descriptionError} backgroundColor='white' placeholder="Description" margin={'1rem 0'} value={description} onChange={(e)=>setDescription(e.target.value)}/>
                        <Flex justifyContent={'space-around'}>
                            <Input isInvalid={errorStart} maxLength={5} backgroundColor='white' placeholder="Start Time (HH:MM)" margin='1rem' value={startTime} onChange={(e)=>setStartTime(e.target.value)}/>
                            <Input isInvalid={errorEnd} maxLength={5} backgroundColor='white' placeholder="End Time (HH:MM)" margin='1rem' value={endTime} onChange={(e)=>setEndTime(e.target.value)}/>
                        </Flex>
                </Flex>
                <Flex direction={'column'} justifyContent={'space-around'} alignItems={'center'}>
                    <ButtonGroup margin='2rem 0'>
                        <Button onClick={addEvent}>Create Event</Button>
                    </ButtonGroup>
                </Flex>
            </Flex>
        </Box>
    )
}

export default NewEventPage;