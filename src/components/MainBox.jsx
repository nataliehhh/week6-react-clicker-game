import '../css/box.css'

export default function MainBox({ mainCount }) {
  return (
    <div className="mainBox box">
        <h1>{mainCount}</h1>
    </div>
  )
}