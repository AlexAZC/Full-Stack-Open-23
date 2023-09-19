export const Add = ({handleName,handleNum,addNum}) => {
    

    return <div>
        
        <form onSubmit={addNum} >
            <div>
                Name: <input type="text" name="name" onChange={handleName} />
            </div>
            <div>
                Number: <input type="text" name="number" onChange={handleNum}  />
            </div>
            <div>
                <button typeof="submit" >ADD</button>
            </div>
        </form>
        
    </div>
}