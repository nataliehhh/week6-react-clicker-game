import '../css/box.css'

export default function Box3({ box3Count, box3Steal }) {
    
    function handleBox3Click() {
        box3Count < 10 && box3Steal();
    }

    return (
        <div className="box3 box" 
             onClick={handleBox3Click}>
            <h1>Box 3 {box3Count}</h1>
            {box3Count < 10 ? <p>Click to steal from Box 2</p> : <p>Box 3 is full!</p>}     
        </div>
    )
}