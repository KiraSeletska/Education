import { faThumbsUp, faMessage, faArrowUpRightFromSquare, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getRandomID, getTime } from '../../App'
import styles from './srtyles.module.scss'
import { FC } from 'react'
import { OtherUser } from '../../OtherUsers'
import { initialState } from "../../store";
import { User } from '../../User'
import { actions } from '../AddPost/userPostState'
import { postType } from '../PostContainer/postState'

interface PostProps {
    title: string,
    text: string,
    groopName: string,
    id:string
}

export const Post: FC<PostProps> = ({title, text, groopName, id}) => {
  const deletPost = (idEl: string) => {
    actions.deletUserPost(idEl)
    console.log(idEl)
  }
    return(
            <div className={styles.postConteiner} key={getRandomID()}>
                <div className={styles.topPost}>
               {id === '1111' ? <User/> : <OtherUser/>}
                    <div>
                        <p>{groopName}</p>
                        <span>{getTime()}</span>
                    </div>
                    <button><FontAwesomeIcon icon={faXmark} 
                    onClick={()=>deletPost(id)}
                    /></button>
                </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <div>
                <button>
                  <FontAwesomeIcon icon={faThumbsUp} />
                  <span>Нравится</span>
                </button>
                <button>
                  <FontAwesomeIcon icon={faMessage} />
                  <span>Комментировать</span>
                </button>
                <button>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  <span>Пoделиться</span>
                </button>
              </div>
            </div>
        
    )
}