import styles from './styles.module.scss'
import { User } from '../User'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { postsState } from '../Posts/postState'
import { connect } from '../conect'
import { useEffect, useState } from 'react'

export const AddPost = () => {

    const [textP, setTextP] =useState('')

    const sendPost = (e:any) => {
        e.preventDefault()

        const newUserPost = {
            title: '',
            text: textP

        }
    }
useEffect(()=>{

},[textP])

    return (
        <div className={styles.addPostWrapper}>
            <form action="" onChange={(e)=>sendPost(e)}>
                <User/>
                <input type="text" placeholder='Add post...'
                onChange={(e)=> console.log(e.target.value)}
                ></input>
                <button type='submit'><FontAwesomeIcon icon={faShare} /></button>
            </form>
        </div>
    )
}
/*
 const AddUserPost = () => {
    return (
        <div className={styles.addPostWrapper}>
            <form action="">
                <User/>
                <input type="text" placeholder='Add post...'/>
                <button type='submit'><FontAwesomeIcon icon={faShare} /></button>
            </form>
        </div>
    )
}
export const AddPost = connect(postsState, AddUserPost);*/