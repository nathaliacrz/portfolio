import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faBook } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './index.scss'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo} alt='logo' />
        </Link>

        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='about-link' to='/sobre'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='portfolio-link' to='/portfolio'>
                <FontAwesomeIcon icon={faBook} color='#4d4d4e' />
            </NavLink>

            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contato'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>

        </nav>

        <ul>
            <li>
                <a href='https://www.linkedin.com/in/nathalia-cruz-6b1561238/' target='_blank' rel='noreferrer' className='anchor-icon'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a href='https://github.com/nathaliacrz' target='_blank' rel='noreferrer' className='anchor-icon'>
                    <FontAwesomeIcon icon={faGithub}/>
                </a>

                <a href='https://www.instagram.com/tthanalia/' target='_blank' rel='noreferrer' className='anchor-icon'>
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
            </li>
        </ul>

    </div>
)

export default Sidebar;