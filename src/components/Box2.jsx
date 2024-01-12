import '../css/box.css'

export default function Box2({ box2Count, box2Steal }) {

    function handleBox2Click() {
        box2Count < 10 && box2Steal();
    }

    return (
        <div className="box2 box" 
             onClick={handleBox2Click}>
            <h1>Box 2 {box2Count}</h1>
            {box2Count < 10 ? <p>Click to steal from Box 1</p> : <p>Box 2 is full!</p>}        
        </div>
    )
}
