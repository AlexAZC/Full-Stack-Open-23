  

  /* PARENT COURSE COMPONENT  */

 export const Course = ({course}) => {
    return <div>
      <Header name={course[0].name}  />
      <Content parts={course[0].parts} />
      <Total sum={course[0].parts} />
      
    </div>
}
 
 

        /* HEADER COMPONENT */
const Header = ({name}) => {
  return <h2>{name}</h2>
}

  /* CONTENT COMPONENT */

  const Part = ({name,exercises}) => <p key={name}>{name} : {exercises} </p>

  const Content = ({parts}) => {
      const displayParts = parts.map((part) => {
        return <Part key={part.name} name={part.name} exercises={part.exercises}  />
      })
    return <div>
        {displayParts}
    </div>
  }

/* TOTAL COMPONENT */

const Total = ({sum}) => {
    const sumExercises = sum.reduce((total, value) => total + value.exercises,0)
    return <h3>Total of {sumExercises} exercises </h3>
  }

    
       