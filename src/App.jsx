import { useState, useEffect } from 'react'
import MainBox from './components/MainBox'
import Box1 from './components/Box1'
import Box2 from './components/Box2'
import Box3 from './components/Box3'
import Modal from './components/Modal'
import Timer from './components/Timer'
import Upgrades from './components/Upgrades'
import tapImage from './images/tap2.png'

export default function App() {

  const gameConstants = {
    box1StealValue: 5,
    box1StealCost: 1,
    box2StealValue: 10,
    box2StealCost: 5,
    box3StealValue: 10,
    box3StealCost: 10,
    boxFullValue: 200,
    mainBoxLimit: 200,
    initialSeconds: 60,
  }

  const [mainCount, setMainCount] = useState(
    parseInt(localStorage.getItem("mainCount")) || 0);
  const [box1Count, setBox1Count] = useState(
    parseInt(localStorage.getItem("box1Count")) || 0);
  const [box2Count, setBox2Count] = useState(
    parseInt(localStorage.getItem("box2Count")) || 0);
  const [box3Count, setBox3Count] = useState(
    parseInt(localStorage.getItem("box3Count")) || 0); 
  const [countRate, setCountRate] = useState(
    parseInt(localStorage.getItem("countRate")) || 3);
  const [seconds, setSeconds] = useState(
    parseInt(localStorage.getItem("seconds")) || gameConstants.initialSeconds);
  const [gameComplete, setGameComplete] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const mainInterval = setInterval(() => {
      setMainCount((currentMainCount) => currentMainCount + 1);
    }, 200 / countRate);

    return () => {
      clearInterval(mainInterval);
    };
  }, [countRate]);

  useEffect(() => {
    localStorage.setItem("mainCount", mainCount.toString());
    localStorage.setItem("countRate", countRate.toString());
    localStorage.setItem("seconds", seconds.toString());
    localStorage.setItem("box1Count", box1Count.toString());
    localStorage.setItem("box2Count", box2Count.toString());
    localStorage.setItem("box3Count", box3Count.toString());
  }, [mainCount, countRate, seconds, box1Count, box2Count, box3Count]);

  function box1Steal() {
    setMainCount((currentMainCount) => {
      const newMainCount = currentMainCount - gameConstants.box1StealCost;
      if (newMainCount > 0) {
        setBox1Count(box1Count + gameConstants.box1StealValue);
        return newMainCount;
      } else {
        return 0;
      }
    });
  }    

  function box2Steal() {
    setBox1Count((box1Count) => {
      const newBox1Count = box1Count - gameConstants.box2StealCost;
      if (newBox1Count > 0) {
        setBox2Count(box2Count + gameConstants.box2StealValue);
        return newBox1Count;
      } else {
        return 0;
      }
    });
  }
  
  function box3Steal() {
    setBox2Count((box2Count) => {
      const newBox2Count = box2Count - gameConstants.box3StealCost;
      if (newBox2Count > 0) {
        setBox3Count(box3Count + gameConstants.box3StealValue);
        return newBox2Count;
      } else {
        return 0;
      }
    });
  }

  function fullReset() {
    setCountRate(1);
    setMainCount(0);
    setBox1Count(0);
    setBox2Count(0);
    setBox3Count(0);
    setSeconds(gameConstants.initialSeconds);
    setGameComplete(false);
    setGameOver(false);
  };

  return (
    <>
      <div className="header">
        <div className="intro">
          <h1>Fill all 3 tanks before the water overflows or time runs out!</h1>
        </div>
      <Timer seconds={seconds} setSeconds={setSeconds} />
      <button onClick={fullReset} >Restart</button>
      </div>

      <div className="gridContainer">
      <img className="tapImage" src={tapImage} alt="running tap graphic"/>
      <MainBox mainCount={mainCount} gameConstants={gameConstants} />
      <Box1 gameConstants={gameConstants} box1Count={box1Count} box1Steal={box1Steal} />
      <Box2 gameConstants={gameConstants} box1Count={box1Count} box2Count={box2Count} box2Steal={box2Steal} />
      <Box3 gameConstants={gameConstants} box2Count={box2Count} box3Count={box3Count} box3Steal={box3Steal} />
      </div>

      <Upgrades countRate={countRate} setCountRate={setCountRate} box3Count={box3Count} setBox3Count={setBox3Count} />

      <Modal gameConstants={gameConstants} seconds={seconds} mainCount={mainCount} box1Count={box1Count} box2Count={box2Count} box3Count={box3Count} gameComplete={gameComplete} gameOver={gameOver} setGameComplete={setGameComplete} setGameOver={setGameOver} fullReset={fullReset} />
    </>
  );
}