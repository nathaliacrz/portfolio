import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faBook, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './index.scss'
import { useState } from 'react';

const Sidebar = () => {

    const [showNav, setShowNav] = useState(false);

    return (
        <div className='nav-bar'>
            <Link
                className='logo'
                to='/'
            >
                <img src={Logo} alt='logo' />
            </Link>

            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink
                    onClick={() => setShowNav(false)}
                    exact='true'
                    activeclassname='active'
                    to='/'
                >
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>

                <NavLink
                    onClick={() => setShowNav(false)}
                    exact='true'
                    activeclassname='active'
                    className='about-link'
                    to='/sobre'
                >
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>

                <NavLink
                    onClick={() => setShowNav(false)}
                    exact='true'
                    activeclassname='active'
                    className='portfolio-link'
                    to='/portfolio'
                >
                    <FontAwesomeIcon icon={faBook} color='#4d4d4e' />
                </NavLink>

                <NavLink
                    onClick={() => setShowNav(false)}
                    exact='true'
                    activeclassname='active'
                    className='contact-link'
                    to='/contato'
                >
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>

                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color='#ff3d700'
                    size='3x'
                    className='close-icon'
                />

            </nav>

            <ul>
                <li>
                    <a
                        href='https://www.linkedin.com/in/nathalia-cruz-6b1561238/'
                        target='_blank'
                        rel='noreferrer'
                        className='anchor-icon'
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>

                    <a
                        href='https://github.com/nathaliacrz'
                        target='_blank'
                        rel='noreferrer'
                        className='anchor-icon'
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>

                    <a
                        href='https://www.instagram.com/tthanalia/'
                        target='_blank'
                        rel='noreferrer'
                        className='anchor-icon'
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
            </ul>

            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color='#d61d50'
                size='3x'
                className='hamburguer-icon'
            />
        </div>
    )
}

export default Sidebar;