import Container from 'react-bootstrap/Container'
import Depoimentos from '../components/Depoimentos'

function Sobre() {
    return (
        <Container className='conteudo-margin'>
            <h1>Sobre</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Necessitatibus tenetur deleniti iste ratione rem quis voluptate 
                est earum veniam omnis temporibus consequatur illum ab animi neque 
                repudiandae, voluptatem molestiae. Fugiat.
            </p>
            <Depoimentos />
        </Container>
    );
}

export default Sobre