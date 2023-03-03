import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";
import style from './Sidebar.module.css'

export function Sidebar(){
    return (
        <aside className={style.sidebar}>
            <img 
                className={style.cover}
                src="https://images.unsplash.com/photo-1608178398319-48f814d0750c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />

            <Avatar 
                  src='https://github.com/DeyvidDiniz.png'
             />

            
            <strong className={style.name}>Deyvid Diniz</strong>
            <span className={style.role}>Front-end Developer</span>
            <hr></hr>

            <footer>
                <a href="#"className={style.edit_profile_btn}>
                <PencilLine/>
                 Editar seu perfil
                </a>
            </footer>

        </aside>
    )
}