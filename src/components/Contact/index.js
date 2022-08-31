import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/';
import './index.scss'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 6000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>

            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 't', 'o']}
                            idx={15} />
                    </h1>
                    <p>
                        Me identifico mais com a área de back-end, porém consigo atuar bem como full-stack. De qualquer maneira, se tiver alguma pergunta ou proposta, pode me mandar por e-mail utilizando o formulário abaixo!!
                    </p>
                    <div className='contact-form'>
                        <form>
                            <ul>
                                <li className='half'>
                                    <input
                                        type='text'
                                        name='name'
                                        placeholder='Nome'
                                        required
                                    />
                                </li>
                                <li className='half'>
                                    <input
                                        type='email'
                                        name='email'
                                        placeholder='E-mail'
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder='Conteúdo'
                                        type='text'
                                        name='subject'
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder='Mensagem'
                                        name='message'
                                        required
                                        cols="30"
                                        rows="10"
                                    >
                                    </textarea>
                                </li>
                                <li>
                                    <input
                                        type="submit"
                                        className='flat-button'
                                        value='Enviar'
                                    />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>

            <Loader type='ball-zig-zag' />
        </>

    )
}

export default Contact;