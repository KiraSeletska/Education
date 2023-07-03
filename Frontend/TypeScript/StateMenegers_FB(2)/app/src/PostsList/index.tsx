import { PostContainer } from '../PostContainer'
import styles from './styles.module.scss'


export const PostList = () => {
    return (
        <div className={styles.postListWrapper}>
<PostContainer/>
        </div>
    )
}
/*
const Posts = (props: any) => (
    <div className={styles.postConteiner}>
        <h3>{props.title}</h3>
<p>{props.text}</p>
    </div>
)
export const PostList = connect(postsState, Posts)*/