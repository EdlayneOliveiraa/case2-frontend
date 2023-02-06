import ListaFuncionalidades from "../components/ListaFuncionalidades"
import Container from 'react-bootstrap/Container'
import Banners from "../components/Banners"

function Funcionalidades() {
    const funcionalidades = [
        {
            id: 1,
            titulo: "Título 1",
            descricao: "Descrição 1",
        },
        {
            id: 2,
            titulo: "Título 2",
            descricao: "Descrição 2",
        },
    ]

    return (
        <>
        <Banners />
        <Container className="conteudo-margin">
            <h1>Funcionalidades</h1>
            <ListaFuncionalidades funcionalidades={funcionalidades} />
        </Container>
        </>
    );
}

export default Funcionalidades