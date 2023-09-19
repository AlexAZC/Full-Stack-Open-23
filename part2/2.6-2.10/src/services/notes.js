import axios from "axios";
const dataUrl = "http://localhost:3001/persons"

const getAll = () => {
    const request = axios.get(dataUrl)
    return request.then(response => response.data)
}

const create = objt => {
    const request = axios.post(dataUrl,objt)
    return request.then(response => response.data)
}

const update = (id,objt) => {
    const request = axios.put(`${dataUrl}/${id}`,objt)
    return request.then(response => response.data)
}

const remove = (id) => {
    const request = axios.delete(`${dataUrl}/${id}`)
    return request.then(response => response.data)
}

export default {getAll,create,update,remove}