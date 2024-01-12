import { useEffect } from 'react'

export default function Timer({ seconds, setSeconds }) {
    useEffect(() => {
        if (seconds <=0) {
            return;
        }

        const timer = setInterval(()=>{
            setSeconds((prevSeconds)=>prevSeconds -1);
        }, 1000);

        return()=>clearInterval(timer);
    }, [seconds]);

    const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)    
    .toString()
    .padStart(2, "0");
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
    };

    return (
        <div>
            <h1>{formatTime(seconds)}</h1>
        </div>
    );
};