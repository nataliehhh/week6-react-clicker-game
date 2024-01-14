import Button from "./Button";

export default function Upgrades({ countRate, setCountRate, box3Count, setBox3Count }) {
    const upgrades = [
        {id: "1", name: "Faster flow", increase: "true", value: "1", cost: "50"},
        {id: "2", name: "Slower flow", increase: "false" ,value: "1", cost: "50"},
        {id: "3", name: "Let it rip!", increase: "true", value: "5", cost: "100"},
        {id: "4", name: "Slow to a drip!", increase: "false", value: "5", cost: "100"}
    ];

    const handleUpgradeClick = (upgrade) => {
        if (upgrade.increase === "true") {
            setCountRate(countRate + upgrade.value);
            setBox3Count(box3Count - upgrade.cost);
            console.log(countRate);
        } else {
            setCountRate((countRate) => {
            const newCountRate = countRate - upgrade.value;
            if (newCountRate > 1) {
                setBox3Count(box3Count - upgrade.cost);;
                return newCountRate;
            } else {
                return 1;
            }
        });
        }
    };

    return (
        <div>
            {box3Count < upgrades[upgrades.length - 1].cost ? ( <h3>Fill the last tank to unlock upgrades!</h3> 
            ) : (
            <h3>You've unlocked upgrades!</h3>
            )}
            {upgrades.map((upgrade)=>(
                <Button
                    key={upgrade.id}
                    upgrade={upgrade}
                    onClick={handleUpgradeClick}
                    box3Count={box3Count}
                />
            ))}
        </div>
    );
};
