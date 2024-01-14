import '../css/box.css'

export default function Box3({ gameConstants, box3Count, box3Steal }) {
    
    const percentage = (box3Count / gameConstants.boxFullValue) * 100;
    const empty = box3Count === 0;
    const q1Full = percentage > 0 && percentage < 25;
    const q2Full = percentage >= 25 && percentage < 50;
    const q3Full = percentage >= 50 && percentage < 100;
    const full = percentage >= 100;

    function handleBox3Click() {
        box3Count < gameConstants.boxFullValue && box3Steal();
    }

    return (
        <div 
            className={`box3 box ${empty && ""} ${q1Full ? "q1Full" : ""} ${q2Full ? "q2Full" : ""} ${q3Full ? "q3Full" : ""} ${full ? "full" : ""}`} 
            onClick={handleBox3Click}>
            <h1>{box3Count}</h1>
            {box3Count < gameConstants.boxFullValue ? <h3>Click to fill!</h3> : <h3>Tank 3 full!</h3>}     
        </div>
    )
}