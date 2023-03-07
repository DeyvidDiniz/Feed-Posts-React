import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import style from './Post.module.css'





export function Post({author, publishedAt, content}){

    const [comments, setComments] = useState([
        1,
        2,
    ])
    

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    } )

    const publisedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment(){
        event.preventDefault();
        setComments([...comments, comments.length + 1 ])
    }

    return(
        <article className={style.post}>
            <header>
                <div className={style.profile}>
                    <Avatar 
                        src={author.avatarUrl}
                    />

                    <div className={style.profileInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time>{publisedDateRelativeToNow}</time>
            </header>

            <div className={style.content}>
                <p>{content}</p>
            </div>

            
            <footer>
                <form onSubmit={handleCreateNewComment}>
                    <strong>Deixe seu feedback</strong>
                    
                    <textarea placeholder='Deixe seu comentário'/>

                    <div className={style.btnPublicar}>
                        <button type="submit">Publicar</button>
                    </div>
                </form>
            </footer>

            

            {comments.map( comment =>{
                return <Comment/>
            })}


        </article>
    )

}