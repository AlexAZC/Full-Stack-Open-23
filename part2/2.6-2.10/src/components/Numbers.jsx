
export const Numbers = ({name,number,func}) => {
   return <div>
   
   <h4>{name}, {number} <button onClick={func}>DELETE</button> </h4> 
   
   </div>
}