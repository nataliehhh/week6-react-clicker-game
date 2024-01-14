import '../css/box.css'

export default function Box2({ gameConstants, box1Count, box2Count, box2Steal }) {

    const percentage = (box2Count / gameConstants.boxFullValue) * 100;
    const empty = box2Count === 0;
    const q1Full = percentage > 0 && percentage < 25;
    const q2Full = percentage >= 25 && percentage < 50;
    const q3Full = percentage >= 50 && percentage < 100;
    const full = percentage >= 100;
    const box2Inactive = box1Count === 0;

    function handleBox2Click() {
        box2Count < gameConstants.boxFullValue && box2Steal();
    }

    return (
        <div 
            className={`box2 box ${empty && ""} ${q1Full ? "q1Full" : ""} ${q2Full ? "q2Full" : ""} ${q3Full ? "q3Full" : ""} ${full ? "full" : ""} ${box2Inactive && "inactive"}`} 
            onClick={handleBox2Click}>
            <h1>{box2Count}</h1>
            {box2Count < gameConstants.boxFullValue ? <h3>Click to fill!💦</h3> : <h3>Tank 2 full!🚫</h3>}   
        </div>
    )
}
