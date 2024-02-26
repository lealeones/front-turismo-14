import React, { useState, useEffect } from 'react';
import { Typography, Button } from '@mui/material';

type CountdownProps = {
    minutes: number,
    start: boolean
}

const Countdown = (props: CountdownProps) => {
    const { minutes: minutesProp, start } = props;
    const [minutes, setMinutes] = useState(minutesProp ?? 0);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(start ?? false);

    useEffect(() => {
        let intervalId: any;

        if (isRunning) {
            intervalId = setInterval(() => {
                if (minutes === 0 && seconds === 0) {
                    setIsRunning(false);
                    clearInterval(intervalId);
                } else {
                    if (seconds === 0) {
                        setMinutes((prevMinutes) => prevMinutes - 1);
                        setSeconds(59);
                    } else {
                        setSeconds((prevSeconds) => prevSeconds - 1);
                    }
                }
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [isRunning, minutes, seconds]);

    const startCountdown = () => {
        setIsRunning(true);
    };

    const stopCountdown = () => {
        setIsRunning(false);
    };

    const resetCountdown = () => {
        setMinutes(0);
        setSeconds(0);
        setIsRunning(false);
    };

    const formatTime = (time: number) => {
        return time < 10 ? `0${time}` : time;
    };

    return (

        <Typography variant="h4">
            {formatTime(minutes)}:{formatTime(seconds)}
        </Typography>

    );
};

export default Countdown;
