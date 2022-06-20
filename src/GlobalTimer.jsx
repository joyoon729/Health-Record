import { Box, Button, VStack } from "@chakra-ui/react";
import React, { useRef, useState } from "react";

export default () => {
  const [btnText, setBtnText] = useState("Start");
  const [time, setTime] = useState("00 : 00 : 00 : 00");
  const start = useRef();
  const timer = useRef();

  const onStart = () => {
    if (btnText === 'Start') {
      // start timer
      setBtnText("Stop");
      startTimer();
    } else {
      // stop timer 
      setBtnText("Start")
      stopTimer();
    }
  }

  const startTimer = () => {
    start.current = Date.now();
    timer.current = setInterval(() => {
      const newTime = convertMilliseconds(Date.now() - start.current);
      setTime(newTime);
    }, 10)
  }

  const stopTimer = () => {
    clearInterval(timer.current);
  }

  const convertMilliseconds = (ms) => {
    const date = new Date(ms);
    
    let milliseconds = Math.round(date.getMilliseconds()/10);
    milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;
    let seconds = date.getSeconds();
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let hours = date.getHours()-9;
    hours = hours < 10 ? "0" + hours : hours;

    const time = `${hours} : ${minutes} : ${seconds} : ${milliseconds}`;
    return time;
  }
  

  return (
    <VStack>
      <Box border="1px" borderRadius="10px" fontSize="5xl" p="15px">
        {time}
      </Box>
      <Button onClick={onStart} size="lg">{btnText}</Button>
    </VStack>
  )
}