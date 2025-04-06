import { useState } from "react"

export default function Batsman() {
    const [runs, setRuns] = useState(0)
    const [sixes, setSixes]=useState(0)

    const handleSingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns)
    }
    const handleSix = () => {
        const updatedRuns = runs + 6;
        const updatedSexes = sixes + 1;
        setSixes(updatedSexes)
        setRuns(updatedRuns)
    }
    const handleFour = () => {
        const updatedRuns = runs + 4;
        setRuns(updatedRuns)
    }

    return (
        <div>
            <h3>Player: Bangla Batsman</h3>
            <p><small>Six: {sixes} </small></p>
            {
                runs > 50 && <p>Congratulation Your runs is 50</p>
            }
            <h2>Score: {runs} </h2>

            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}