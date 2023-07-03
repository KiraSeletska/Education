import styles from './styles.module.scss'
import { User } from '../User'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect, dispatch } from '../connect'
import { useState } from 'react'
import { initialState } from '../store'


 const AddPost = () => {
    const timeElapsed = Date.now();
    const time = new Date(timeElapsed);
    const acttime = time.toLocaleDateString()

    const [textP, setTextP] = useState('')
        const newUserPost = {
            id: '1111',
            date: acttime,
            title: '111',
            text: textP
        }

const addPost: React.FormEventHandler = (e) => {
    e.preventDefault();
    dispatch({
        type: "addUserPost",
        payload: {...newUserPost},
      });

      setTextP('')
      console.log(initialState)
}
  
    return (
        <div className={styles.addPostWrapper}>
            <form action="" onSubmit={(e)=>addPost(e)}>
                <User/>
                <input type="text" placeholder='Add post...'
                value={textP}
                onChange={(e)=> setTextP(e.target.value)}
                ></input>
                <button type='submit'
                onClick={()=>{}}
                ><FontAwesomeIcon icon={faShare} /></button>
            </form>
        </div>
    )
}

export const AddPostContainer = connect(
    (state: typeof initialState) => state.Posts,
    AddPost
  );
  