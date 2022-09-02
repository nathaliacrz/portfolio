import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-home.png'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import Logo from './Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 't', 'h', 'a', 'l', 'i', 'a', '!']
    const jobArray = ['D', 'e', 's', 'e', 'n', 'v', 'o', 'l', 'v', 'e', 'd', 'o', 'r', 'a', ' ', 'w', 'e', 'b', ';']
    const meChamoArray = ['m', 'e', ' ', 'c', 'h', 'a', 'm', 'o']

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 6000);
        return () => clearTimeout(timer);
    }, []);

    return (

        <>
           
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>P</span>
                    <span className={`${letterClass} _12`}>r</span>
                    <span className={`${letterClass} _13`}>a</span>
                    <span className={`${letterClass} _14`}>z</span>
                    <span className={`${letterClass} _15`}>e</span>
                    <span className={`${letterClass} _16`}>r</span>
                    <span className={`${letterClass} _17`}>,</span>
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={meChamoArray}
                        idx={18} />
                    <img src={LogoTitle} alt="inicial do nome da desenvolvedora" />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        idx={26} />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray}
                        idx={34} />
                </h1>
                <h2>Desenvolvedora Full-Stack</h2>
                <Link to='/contato' className='flat-button'>
                    Contato
                </Link>
            </div>
            <Logo />
        </div>

        <Loader type='ball-zig-zag'/>
        
        </>
    )
}

export default Home;