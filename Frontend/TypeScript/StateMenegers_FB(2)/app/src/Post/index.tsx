import { faThumbsUp, faMessage, faArrowUpRightFromSquare, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getRandomID } from '../App'
import styles from './srtyles.module.scss'
import { FC } from 'react'
import { OtherUser } from '../OtherUsers'
import { initialState } from "../store";
import { User } from '../User'

interface PostProps {
    title: string,
    text: string,
    groopName: string,
    id:string
}

export const Post: FC<PostProps> = ({title, text, groopName, id}) => {

const timeElapsed = Date.now();
const time = new Date(timeElapsed);
const acttime = time.toLocaleDateString()

    return(
    
            <div className={styles.postConteiner} key={getRandomID()}>
                <div className={styles.topPost}>
               {id === '1111' ? <User/> : <OtherUser/>}
                    <div>
                        <p>{groopName}</p>
                        <span>{acttime}</span>
                    </div>
                    <button><FontAwesomeIcon icon={faXmark} /></button>
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