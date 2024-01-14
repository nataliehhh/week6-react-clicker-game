import '../css/button.css'

export default function Button({ upgrade, box3Count, onClick }) {
  
    return (
        <button onClick={() => onClick(upgrade)} disabled={box3Count < upgrade.cost}> 
            {upgrade.name} - costs {upgrade.value}
        </button>
    );
}