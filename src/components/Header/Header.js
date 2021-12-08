import './Header.css'



export const Header = () => {
    return (
        <div className='header'>
            <h1 className="logo">React films</h1>
            <ul className="menu">
                <li className='menuItem'>Главная</li>
                <li className='menuItem'>menu2</li>
                <li className='menuItem'>menu3</li>
            </ul>
        </div>
    )
}