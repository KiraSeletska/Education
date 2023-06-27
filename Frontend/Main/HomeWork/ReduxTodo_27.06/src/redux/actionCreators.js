

export const decrease = () => {
    return{
        type: "DECREASE"
    }
}

export const increase = () => {
    return{
        type: "INCREASE"
    }
}

export const changeByValue = (value) =>{
    return{
        type: 'CHANGE',
        payload: value,
    }
}

export const addTodo = (value) => {
    return{
        type: "ADDTODO",
        payload: value
    }

}

export const toggleTodo = (id) => {
    return{
        type: "TOGGLETODO",
        idEl: id
    }

}

export const removeTodo = (id) => {
return{
    type: "REMOVETODO",
    idEl: id
}
}
//actions for todo