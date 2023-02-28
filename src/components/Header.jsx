import style from '../components/Header.module.css'
import LogoIginte from '../assets/logoIgnite.svg'

export function Header(){
    return (
        <div className={style.header}>
            <img src={LogoIginte} alt="logotipo do Ignite" />
        </div>
    )

}