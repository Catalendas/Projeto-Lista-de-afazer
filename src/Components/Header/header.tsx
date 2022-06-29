import logo from '../assets/logo.svg'
import style from './header.module.css'

export function Header(){
    return (
        <header className={style.header}>
            <div>
                <img src={logo} alt="Logo" />
            </div>
        </header>
    )
}