import { useEffect } from 'react'
import '../css/modal.css'


export default function Modal({ gameConstants, seconds, mainCount, box1Count, box2Count, box3Count, fullReset, gameComplete, setGameComplete, gameOver, setGameOver }) {
    
    useEffect(()=>{
        if (seconds <= 0 || mainCount >= gameConstants.mainBoxLimit) {
            setGameOver(true);
        } else {
            setGameOver(false);
        }
    }, [seconds, mainCount]);

    useEffect(()=>{
        if (box1Count >= gameConstants.boxFullValue && box2Count >= gameConstants.boxFullValue && box3Count >= gameConstants.boxFullValue) {
          setGameComplete(true);
          setGameOver(false);  
        } else {
          setGameComplete(false);
        }
    }, [box1Count, box2Count, box3Count]);

    return (
        <>
            {gameOver && 
                <div className="modal" style={{display: (gameOver) ? "block" : "none"}}>
                    <div className="modalMessage">
                    <h1>GAMEOVER!😭</h1>
                    <h3>Want to play again?</h3>
                    <button onClick={fullReset}>Start</button>
                    </div>
                </div>
            }
            {gameComplete && 
                <div className="modal" style={{display: (gameComplete) ? "block" : "none"}}>
                    <div className="modalMessage">
                    <h1>Congrats you won!!!🎉🎉🎉</h1>
                    <h3>Want to play again?</h3>
                    <button onClick={fullReset}>Start</button>
                    </div>
                </div>
            }
        </>
    );
}