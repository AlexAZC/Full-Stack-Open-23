

/* PARENT NODE COMPONENT */

export const Node = ({course}) => {
    return <div>
        <NodeHeader name={course[1].name} />
        <NodeContent parts={course[1].parts} />
        <NodeTotal total={course[1].parts} />
    </div> 
}

/* NODEHEADER COMPONENT */

const NodeHeader = ({name}) => {
   return <h2>{name}</h2>
}

/* NODECONTENT COMPONENT */
const NodeContent = ({parts}) => {
    const displayParts = parts.map((part) => {
        return <Part name={part.name} exercises={part.exercises} />
    })

    return <div>
        {displayParts}
    </div>
}

const Part = ({name,exercises}) => {
   return <p key={name} >{name} : {exercises} </p>
}

/* NODETOTAL COMPONENT */

const NodeTotal = ({total}) => {
    const totalExercises = total.reduce((total,value) => total + value.exercises,0);
    return <h3>Total of {totalExercises} exercises</h3>
}



