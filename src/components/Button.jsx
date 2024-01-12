import '../css/button.css'

export default function Button({ box3Count, increaseCountRate, decreaseCountRate }) {
    return (
        <div className="buttonContainer">
            <button onClick={increaseCountRate} disabled={box3Count < 10}>Click to double your count! - costs 10 points</button>
            <button onClick={decreaseCountRate} disabled={box3Count < 10}>Click to slow the flow! - costs 10 points</button>
        </div>
    )
}