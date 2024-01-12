import { useState, useEffect } from 'react'
import MainBox from './components/MainBox'
import Box1 from './components/Box1'
import Box2 from './components/Box2'
import Box3 from './components/Box3'
import Button from './components/Button'
import Modal from './components/Modal'
import Timer from './components/Timer'

export default function App() {
  const [mainCount, setMainCount] = useState(
    parseInt(localStorage.getItem("mainCount")) || 0);
  const [box1Count, setBox1Count] = useState(0);
  const [box2Count, setBox2Count] = useState(0);
  const [box3Count, setBox3Count] = useState(0); 
  const [countRate, setCountRate] = useState(
    parseInt(localStorage.getItem("countRate")) || 1);
  const [seconds, setSeconds] = useState(
    parseInt(localStorage.getItem("seconds")) || 60);
  const [gameComplete, setGameComplete] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // setting main count to count incrimentally depending on value of count rate
  useEffect(() => {
    const mainInterval = setInterval(() => {
      setMainCount((currentMainCount) => currentMainCount + 1);
    }, 1000 / countRate);

    return () => {
      clearInterval(mainInterval);
    };
  }, [countRate]);

  // saving main count, count rate, seconds(for countdown timer) to local storage everytime they change
  useEffect(() => {
    localStorage.setItem("mainCount", mainCount.toString());
    localStorage.setItem("countRate", countRate.toString());
    localStorage.setItem("seconds", seconds.toString());
  }, [mainCount, countRate, seconds]);

  function box1Steal() {
    setBox1Count(box1Count + 1);
    setMainCount((currentMainCount) => {
      const newMainCount = currentMainCount - 5;
      if (newMainCount > 0) {
        return newMainCount;
      } else {
        return 0;
      }
    });
  }    

  function box2Steal() {
    setBox2Count(box2Count + 1);
    setBox1Count((box1Count) => {
      const newBox1Count = box1Count - 1;
      if (newBox1Count > 0) {
        return newBox1Count;
      } else {
        return 0;
      }
    });
  }
  
  function box3Steal() {
    setBox3Count(box3Count + 1);
    setBox2Count((box2Count) => {
      const newBox2Count = box2Count - 1;
      if (newBox2Count > 0) {
        return newBox2Count;
      } else {
        return 0;
      }
    });
  }

  function increaseCountRate() {
    setCountRate(countRate + 1);
    setBox3Count(box3Count - 10);
    console.log(countRate);
  }

  function decreaseCountRate() {
    setCountRate((countRate) => {
      const newCountRate = countRate - 1;
      if (newCountRate > 1) {
        setBox3Count(box3Count - 10);
        return newCountRate;
      } else {
        return 1;
      }
    });
    console.log(countRate);
  }

  function fullReset() {
    setCountRate(1);
    setMainCount(0);
    setBox1Count(0);
    setBox2Count(0);
    setBox3Count(0);
    setSeconds(60);
  }

  return (
    <>
      <div className="header">
        <div className="intro">
          <h1>React Clicker Game</h1>
          <p>intro</p>
        </div>
      <Timer className="timer" seconds={seconds} setSeconds={setSeconds} />
      </div>
      <div className="gridContainer">
      <MainBox mainCount={mainCount} />
      <Box1 box1Count={box1Count} box1Steal={box1Steal} />
      <Box2 box2Count={box2Count} box2Steal={box2Steal} />
      <Box3 box3Count={box3Count} box3Steal={box3Steal} />
      </div>
      <Button box3Count={box3Count} increaseCountRate={increaseCountRate} decreaseCountRate={decreaseCountRate} />
      <Modal seconds={seconds} mainCount={mainCount} box1Count={box1Count} box2Count={box2Count} box3Count={box3Count} gameComplete={gameComplete} gameOver={gameOver} setGameComplete={setGameComplete} setGameOver={setGameOver} fullReset={fullReset} />
    </>
  );
}