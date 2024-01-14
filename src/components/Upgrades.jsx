import '../css/button.css'
import Button from "./Button";

export default function Upgrades({ countRate, setCountRate, box3Count, setBox3Count }) {
    const upgrades = [
        {id: "1", name: "Slow to a drip!💧", increase: "false", value: "1", cost: "100"},
        {id: "2", name: "Speed it up💦💦", increase: "true", value: "1", cost: "50"},
        {id: "3", name: "Let it rip!!!💦💦🌊", increase: "true", value: "3", cost: "100"}, 
    ];

    const handleUpgradeClick = (upgrade) => {
        if (upgrade.increase === "true") {
            setCountRate(countRate + parseInt(upgrade.value));
            setBox3Count(box3Count - parseInt(upgrade.cost));
            console.log("count rate:", countRate);
        } else {
            setCountRate((countRate) => {
            const newCountRate = countRate - parseInt(upgrade.value);
            if (newCountRate > 1) {
                setBox3Count(box3Count - parseInt(upgrade.cost));
                console.log("count rate:", countRate);
                return newCountRate;
            } else {
                return 2;
            }})
        };
        };

    return (
        <div className="upgrades"> 
            {box3Count < upgrades[upgrades.length - 1].cost ? ( <h3>Fill the last tank to unlock upgrades!</h3> 
            ) : (
            <h3>You've unlocked the upgrades!</h3>
            )}

            <div className="buttonContainer">
            {upgrades.map((upgrade)=>(
                <Button
                    key={upgrade.id}
                    upgrade={upgrade}
                    onClick={handleUpgradeClick}
                    box3Count={box3Count}
                />
            ))}
            </div>
        </div>
    );
};
