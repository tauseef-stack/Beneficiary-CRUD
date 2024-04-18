
import 'react-toastify/dist/ReactToastify.css';

export const addOneBinificiary = (data) => {
    return {
        type:"ADDONE",
        payload: data,
    }
}

export const editBinificiary = (data) => {
    return {
        type:"EDIT",
        payload: data,
    }
}

export const deleteOneBinificiary = (id) => {
    return {
        type:"DELETE",
        payload: id,
    }
}