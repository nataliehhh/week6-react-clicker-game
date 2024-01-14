import '../css/button.css'

export default function Button({ upgrade, box3Count, onClick }) {
  
    return (
        <button onClick={() => onClick(upgrade)} disabled={box3Count < upgrade.cost}> 
            <h3>{upgrade.name}</h3>
            <p>Cost: {upgrade.cost}</p> 
        </button>
    );
}