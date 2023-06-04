import earthIcon from '../assets/icon-earth.svg'

export default function Header() {
    return (
        <header>
            <img className="header__icon" src={earthIcon} alt="Earth icon" aria-hidden="true" />
            <h1 className="header__title">Travel Journal</h1>
        </header>
    )
}