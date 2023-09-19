import axios from "axios";

const dbURL = "http://localhost:3001/notes"

const getAll = () => {
    const request = axios.get(dbURL)
    return request.then(res => {
        res.data
    })
}

const create = newObject => {
    const request = axios.post(dbURL,newObject)
    return request.then(res => {
        res.data
    })
}

const update = (id,newObject) => {
    const request = axios.put(`${dbURL}/${id}`,newObject)
    return request.then(res => {
        res.data
    })
}

export default { getAll,create,update }