import { NavLink } from 'react-router-dom'
import './index.scss';

export const Header = () => 
{
    return (
        <header className="header">
            <img src="logo192.png" alt="pepe-logo" className="logo"/>
            <div>
                <h1 className='title'>PepeChat</h1>
            </div>
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink to='profile'>Profile</NavLink>
                        <NavLink to='home'>Home</NavLink>
                        <NavLink to='signup'>SignUp</NavLink> 
                        <NavLink to='signin'>SignIn</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}