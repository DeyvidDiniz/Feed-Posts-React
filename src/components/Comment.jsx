import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from './Avatar'
import style from './Comment.module.css'

export function Comment({content, onDeleteComment}){

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleAddLikeComment(){
        const NumberofLikes = likeCount + 1
        setLikeCount(NumberofLikes);
    }

    return(
        <div className={style.comment}>
            <Avatar
                hasBorder={false}
                src="https://pps.whatsapp.net/v/t61.24694-24/328738145_1070209000572743_5106852784226137364_n.jpg?ccb=11-4&oh=01_AdTawtOfNtVbxf5gvn-R7c2_SZRcT5QoCB65GcTIAjFxLQ&oe=641458E2"
            />
            
            <div className={style.commentContainer}>
                <div className={style.commentContent}>
                    <div className={style.commentHeader}>
                        <header>
                            <div className={style.commentInfo}>
                                <strong>Camilly</strong>
                                <span>Cerca de 2h atrás</span>
                            </div>
                            <button onClick={handleDeleteComment} title="Deletar comentário">
                                <Trash size={20}/>
                            </button>
                            
                        </header>
                    </div>

                    <div className={style.commentText}>
                        <p>{content}</p>
                    </div>
                </div>

                <div 
                    className={style.commentLikes}
                    onClick={handleAddLikeComment}
                >
                    <ThumbsUp size={20}/>
                    Aplaudir
                    <span>{likeCount}</span>
                </div>
            </div>
        </div>
    )
}