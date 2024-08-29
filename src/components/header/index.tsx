import { NavLink } from 'react-router-dom'
import './index.scss';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated, selectAuthUser } from 'stores/auth-store';
import { useCustomNivagate } from 'hooks/use-custom-navigate';
import { MouseEvent } from 'react';
import { NavigationLink } from 'components/navigation-link';

export const Header = () => 
{
    const navigate = useCustomNivagate();

    const isAuthenticated = useSelector(selectIsAuthenticated);
    const user = useSelector(selectAuthUser);

    const navigateTo = (location: string, e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        navigate(location)
    }

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
                        <NavigationLink to='home'>Home</NavigationLink>
                        {isAuthenticated ? (
                            <>
                                <NavigationLink to='profile'>Profile</NavigationLink>
                                <NavigationLink to='signout'>SignOut</NavigationLink>
                            </>
                        ) : (
                            <>
                                <NavigationLink to='signin'>SignIn</NavigationLink>
                                <NavigationLink to='signup'>SignUp</NavigationLink> 
                            </>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    )
}