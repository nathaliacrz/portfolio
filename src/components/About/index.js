import './index.scss'
import AnimatedLetters from '../AnimatedLetters';

const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={['S', 'o', 'b', 'r', 'e', ' ', 'm', 'i', 'm']}
                        idx={15} />
                </h1>
                <p>
                    Como uma pessoa que não gosta de nada que seja fácil, estou sempre procurando desafios para serem superados. Atualmente estou em busca de um cargo para poder colocar em prática enquanto aprendo e consigo experiência no mercado.
                </p>
                <p>
                    Sou uma pessoa introvertida e naturalmente curiosa, estou a todo momento procurando novos conhecimentos para aplicar em projetos
                </p>
                <p>
                    Se precisasse me definir em poucas palavras diria que sou uma pessoa completamente apaixonada por esportes, pelo contato com a natureza. 
                </p>
            </div>
        </div>
    )
}

export default About;