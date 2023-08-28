import { useSelector } from "react-redux";

export const ShoeState = () => {
    const dataTodo = useSelector((state) => state.todos.todos);
    const dataFolders = useSelector((state) => state.folders.folders);

    const show = () => {
        console.log(dataTodo)
        console.log(dataFolders)
    }    
    return(
        <button onClick={()=>show()}>STATE</button>
    )
}