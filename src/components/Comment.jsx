import { ThumbsUp, Trash } from 'phosphor-react'
import style from './Comment.module.css'

export function Comment(){
    return(
        <div className={style.comment}>
            <img src='https://github.com/DeyvidDiniz.png'/>
            
            <div className={style.commentContainer}>
                <div className={style.commentContent}>
                    <div className={style.commentHeader}>
                        <header>
                            <div className={style.commentInfo}>
                                <strong>Devon Lane</strong>
                                <span>Cerca de 2h atrás</span>
                            </div>
                            <Trash size={20}/>
                        </header>
                    </div>

                    <div className={style.commentText}>
                        <p>Muito bom Devon, parabéns!! 👏👏</p>
                    </div>
                </div>

                <div className={style.commentLikes}>
                    <ThumbsUp size={20}/>
                    Aplaudir
                    <span>03</span>
                </div>
            </div>
        </div>
    )
}