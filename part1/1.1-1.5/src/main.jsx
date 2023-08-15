import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = (props) => {
      return <h1>{props.course}</h1>
}

const Content = ({all}) => {
    const parts = all.map((part) => {
      return(
        <Part part={part.name} exercise={part.exercises} />
      )
    })
      return (
        <div>
          {parts}
        </div>
      )
}

const Part = (props) => {
    return <p key={props.part} >{props.part}: {props.exercise}</p>
}

const Total = (props) => {
    return <p>{props.total}</p>
}



const App = () => {
  
  const course = {
    name:'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React' ,
        exercises: 10
      },
      {
        name: 'Using props to pass data' ,
        exercises: 7,
      },
      {
        name: 'State of a component' ,
        exercises: 14
      },
    ]
  }

  let parts = course.parts
  
  return (

    <div>
      <Header course={course.name} />
      <Content all={parts} />
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises } />
    </div>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
