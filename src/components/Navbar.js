import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
            <div className="navbar-brand">
                Githab Search
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink exact to="/" className="nav-link">Главная</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link">Информация</NavLink>
                </li>
            </ul>
        </nav>
    )
}
