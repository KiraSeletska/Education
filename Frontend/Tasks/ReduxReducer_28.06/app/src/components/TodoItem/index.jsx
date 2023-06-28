import { todoReducer } from "../../store/reducer/todoReducer"
import { useDispatch, useSelector } from 'react-redux'

export const TodoItem = ({title, id}) =>{


    const dispatch = useDispatch()

    const delet = (id) => {
        dispatch({type: 'DELET', payload: id})
    }
    return(
        <div>
            <p>{title}</p>
            <button onClick={()=>delet(id)}>Del</button>
        </div>
    )
}