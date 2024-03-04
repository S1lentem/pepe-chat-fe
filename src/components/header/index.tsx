import { NavLink } from 'react-router-dom'
import './index.scss';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from 'stores/auth-store';

export const Header = () => 
{
    const isAuthenticated = useSelector(selectIsAuthenticated);

    return (
        <header className="header">
            <img src="logo192.png" alt="pepe-logo" className="logo"/>
            <div>
                <h1 className='title'>PepeChat</h1>
            </div>
            <nav className="nav">
                <ul>
                    <li>
                        {isAuthenticated && (
                            <NavLink to='profile'>Profile</NavLink>
                        )}
                        <NavLink to='home'>Home</NavLink>
                        {!isAuthenticated ? (
                            <>
                                <NavLink to='signup'>SignUp</NavLink> 
                                <NavLink to='signin'>SignIn</NavLink>
                            </>
                        ) : (
                            <NavLink to='signout'>SignOut</NavLink>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    )
}