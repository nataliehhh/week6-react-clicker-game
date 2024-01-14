import { useEffect } from 'react'
import '../css/modal.css'


export default function Modal({ gameConstants, seconds, mainCount, box1Count, box2Count, box3Count, fullReset, gameComplete, setGameComplete, gameOver, setGameOver }) {
    
    useEffect(()=>{
        if (box1Count >= gameConstants.boxFullValue && box2Count >= gameConstants.boxFullValue && box3Count >= gameConstants.boxFullValue) {
          setGameComplete(true);  
        } else {
          setGameComplete(false);
        }
    }, [box1Count, box2Count, box3Count]);

    useEffect(()=>{
        if (seconds <= 0 || mainCount >= gameConstants.mainBoxLimit) {
            setGameOver(true);
        } else {
            setGameOver(false);
        }
    }, [seconds, mainCount]);

    return (
        <div className="modal">
            {gameOver && 
            <div>
            <h1>GAMEOVER!</h1>
            <p>Want to play again?</p>
            <button onClick={fullReset}>Play again</button>
            </div>
            }
            {gameComplete && 
            <div>
            <h1>Congrats you've completed the game!!!</h1>
            <p>Want to play again?</p>
            <button onClick={fullReset}>Play again</button>
            </div>
            }
        </div>
    );
}