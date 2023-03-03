import { Comment } from './Comment'
import style from './Post.module.css'

export function Post(){
    return(
        <article className={style.post}>
            <header>
                <div className={style.profile}>
                    <img src='https://github.com/DeyvidDiniz.png'/>
                    <div className={style.profileInfo}>
                        <strong>Deyvid Diniz</strong>
                        <span>Dev Front-End</span>
                    </div>
                </div>
                <time>Publicado há 1h</time>
            </header>

            <div className={style.content}>

                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href="#"> jane.design/doctorcare</a></p>

                <p>
                    <a href="">#novoprojeto </a>
                    <a href="">#nlw </a>
                    <a href="">#rocketseat </a>
                </p>
            </div>

            <footer>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe seu comentário'/>
                <div className={style.btnPublicar}>
                    <a href="">Publicar</a>
                </div>
            </footer>

            <Comment/>
            <Comment/>
            <Comment/>


        </article>
    )

}