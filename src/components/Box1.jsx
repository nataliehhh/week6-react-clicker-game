import '../css/box.css'

export default function Box1({ box1Count, box1Steal }) {

    function handleBox1Click() {
        box1Count < 10 && box1Steal();
    }

    return (
        <div className="box1 box" 
             onClick={handleBox1Click}>
            <h1>Box 1 {box1Count}</h1>
            {box1Count < 10 ? <p>Click to steal from main</p> : <p>Box 1 is full!</p>}
        </div>
    )
}