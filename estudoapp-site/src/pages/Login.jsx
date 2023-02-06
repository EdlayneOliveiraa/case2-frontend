import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import CmsApi from '../api/CmsApi'

function Login() {

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        const email = form.elements.Email.value
        const senha = form.elements.Senha.value

        CmsApi().login(email, senha)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('token', data.token)
                window.location.href = '/admin/funcionalidades'
            })
    }

    return (
        <Container className='conteudo-margin'>
        <h1>Login</h1>

        <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="Email">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Digite seu e-mail" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Senha">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Digite sua senha" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Realizar Login
                </Button>
            </Form>

        </Container>
    )
}

export default Login