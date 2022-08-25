import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-home.png'
import './index.scss'

const Home = () =>{ 
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Prazer, <br/> me chamo 
                <img src={LogoTitle} alt="inicial do nome da desenvolvedora" />
                athalia!!
                <br/>
                Desenvolvedora web;</h1>
                <h2>Desenvolvedora Full-Stack</h2>
                <Link to='/contato' className='flat-button'>
                Contato
                </Link>
            </div>
        </div>
    )
}

export default Home;