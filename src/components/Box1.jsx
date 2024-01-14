import '../css/box.css'

export default function Box1({ gameConstants, box1Count, box1Steal }) {
  
    const percentage = (box1Count / gameConstants.boxFullValue) * 100;
    const empty = box1Count === 0;
    const q1Full = percentage > 0 && percentage < 25;
    const q2Full = percentage >= 25 && percentage < 50;
    const q3Full = percentage >= 50 && percentage < 100;
    const full = percentage >= 100;
  
    function handleBox1Click() {
        box1Count < gameConstants.boxFullValue && box1Steal();
    }

    return (
        <div 
            className={`box1 box ${empty && ""} ${q1Full ? "q1Full" : ""} ${q2Full ? "q2Full" : ""} ${q3Full ? "q3Full" : ""} ${full ? "full" : ""}`}
            onClick={handleBox1Click}>
            <h1>{box1Count}</h1>
            {box1Count < gameConstants.boxFullValue ? <h3>Click to fill!💦</h3> : <h3>Tank 1 full!🚫</h3>}
        </div>
    )
}