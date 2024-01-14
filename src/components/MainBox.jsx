import '../css/box.css'

export default function MainBox({ mainCount, gameConstants }) {

  const percentage = (mainCount / gameConstants.mainBoxLimit) * 100;
  const q1Full = percentage < 25;
  const q2Full = percentage >= 25 && percentage < 50;
  const q3Full = percentage >= 50 && percentage < 100;
  const full = percentage >= 100;

  return (
    <div className={
      `mainBox box ${q1Full ? "q1Full" : ""} ${q2Full ? "q2Full" : ""} ${q3Full ? "q3Full" : ""} ${full ? "full" : ""}`}>
        <h1>{mainCount}</h1>
    </div>
  );
}