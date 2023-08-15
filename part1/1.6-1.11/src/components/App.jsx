import { useState } from "react"



const Statistics = ({all}) => {
    const [total,average,good,bad,neutral] = all;
    
    return (total ? <div>
    <h2>Statistics</h2>
    <StatisticsLine text="good" value={good} />
    <StatisticsLine text="neutral" value={neutral} />
    <StatisticsLine text="bad" value={bad} />
    <StatisticsLine text="all" value={total} />
    <StatisticsLine text="average" value={average/total} />
    <StatisticsLine text="positive" value={(good/total) * 100} />
    
</div> : <p>No feedback given</p>)
}

const StatisticsLine = ({text,value}) => {
    return <table>
            <tbody>
                <tr>
                    <td style={{padding:"5px"}} >{text}</td>
                    <td style={{padding:"5px"}} > {value} </td>
                </tr>
            </tbody>
    </table>
 }

const Buttons = ({allfuncs, allvalues}) => {
    const [goodFunc,neutralFunc,badFunc] = allfuncs;
    const[goodValue,neutralValue,badValue] = allvalues;

    return(
        <div>
            <ButtonsLine func={goodFunc} text={goodValue} />
            <ButtonsLine func={neutralFunc} text={neutralValue} />
            <ButtonsLine func={badFunc} text={badValue} />
        </div>
    )
}

const ButtonsLine = ({func,text}) =>{
    return(
        <button onClick={func} >{text}</button>
    )
}

export const App = () => {

    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
  
    /* values for simplify some values */
    let total = good + neutral + bad
    let average = good - bad;

    /*Array for Statistics props */
    let allvalues = [total,average,good,bad, neutral];

    /* Array for the button props*/     
    let allfunc = [() => setGood(good + 1),() => setNeutral(neutral + 1),() => setBad(bad + 1)];
    let alltexts = ["good","neutral","bad"];

    return (
      <div>
        <h2>Give Feedback</h2>
        <Buttons allfuncs={allfunc} allvalues={alltexts} />
        <Statistics all={allvalues} />
      </div>
    )
  }