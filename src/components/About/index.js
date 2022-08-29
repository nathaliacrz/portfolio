import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray={['S', 'o', 'b', 'r', 'e', ' ', 'm', 'i', 'm']}
                        idx={15} />
                </h1>
                <p>
                    Como uma pessoa que não gosta de nada que seja fácil, estou sempre procurando desafios para serem superados. Atualmente estou em busca de um cargo para poder colocar em prática enquanto aprendo e consigo experiência no mercado.
                </p>
                <p>
                    Sou uma pessoa introvertida e naturalmente curiosa, estou a todo momento procurando novos conhecimentos para aplicar em projetos.
                </p>
                <p>
                    Se precisasse me definir em poucas palavras diria que sou uma pessoa completamente apaixonada por esportes, principalmente musculação, pelo contato com a natureza e com animais, principalmente cachorrinhos. 
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faJava} color='#DD0031'/>
                    </div>
               
                    <div className='face2'>
                        <FontAwesomeIcon icon={faReact} color='#DD0031'/>
                    </div>
                   

                </div>

            </div>

        </div>
    )
}

export default About;