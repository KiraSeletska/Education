import { useParams } from "react-router-dom";
import { DataArr } from "../../Data";
import { SingleMainFormula } from "../../Components/SingleMainFunction"; 
import { FunctionSolution } from "../../Components/FunctionSolution";
import styles from './styles.module.scss'

export const SingleFormulaPage = () => {
    const { name } = useParams();
   const newData = DataArr.filter(el => el.name === name)

    return(
        <div className={styles.wrapper}>
           { /*<MainFunction el={newData[0]}/>*/}
           {/*newData.map(el => <MainFunction el={el}/>)*/}
           {newData.map(el => <SingleMainFormula {...el} key={el.id}/>)}
           {newData[0].otherSolutions.map(el => <FunctionSolution {...el} key={el.id}/>)}
        </div>
    )
}