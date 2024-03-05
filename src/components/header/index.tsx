import { NavLink } from 'react-router-dom'
import './index.scss';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated, selectAuthUser } from 'stores/auth-store';

export const Header = () => 
{
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const user = useSelector(selectAuthUser);

    return (
        <header className="header">
            <img src="logo192.png" alt="pepe-logo" className="logo"/>
            <div>
                <h1 className='title'>PepeChat</h1>
            </div>
            {isAuthenticated && user && (
                <div className='welcome-container'>
                    <h2 className='title'>{`Hi! ${user.username}`}</h2>
                </div>
            )}
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink to='home'>Home</NavLink>
                        {isAuthenticated ? (
                            <>
                                <NavLink to='profile'>Profile</NavLink>
                                <NavLink to='signout'>SignOut</NavLink>
                            </>
                        ) : (
                            <>
                                <NavLink to='signin'>SignIn</NavLink>
                                <NavLink to='signup'>SignUp</NavLink> 
                            </>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    )
}