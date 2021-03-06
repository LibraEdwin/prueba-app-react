import React, { useEffect, useState } from 'react'
import { Alert, Button, Form, Modal } from 'react-bootstrap'
import logo from '../asset/logo.png'
import Cookies from 'universal-cookie';
import { DecifrarAES } from '../helpers/DecifrarAES';
import { useStateApi } from '../hooks/useStateApi';

const cookies = new Cookies()

export const Auth = () => {

    const { state } = useStateApi()

    const [imput, setImput] = useState({})

    const handleImputChange = (e) => {
        setImput({
            ...imput,
            [e.target.name]: e.target.value
        });
    }


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const iniciarSesion = async () => {
        const usuario = await state.usuario
        const contraseña = DecifrarAES(state.contraseña)
        if (usuario == imput.usuario && contraseña == imput.contraseña) {
            cookies.set('usuario', usuario, { path: '/' })
            window.location.href = "./menu"
        } else {
            setShow(true)
        }
    }

    useEffect(() => {
        const componentDidMount = () => {
            if (cookies.get('usuario')) {
                window.location.href = "./menu";
            }
        }
        componentDidMount()
    }, []);

    return (
        <>
            <>
                <Modal
                    show={show}
                    onHide={handleClose}
                    centered>
                    <Alert variant="danger">
                        <Alert.Heading>El usuario o la contraseña son incorrectos!</Alert.Heading>
                    </Alert>
                </Modal>
            </>
            <div className='divFondoLogin'>
                <Form className='formLogin col-8 mb-sm-7 col-md-6 col-lg-5 col-xl-4'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Text className="text-muted" >
                            <h1>App Demo</h1>
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicImg">
                        <img alt='logo' className='col-4' src={logo} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicUsuario">
                        <Form.Control type="text" placeholder="Usuario"
                            name="usuario"
                            onChange={handleImputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicContraseña">
                        <Form.Control type="password" placeholder="Contarseña"
                            name="contraseña"
                            onChange={handleImputChange} />
                    </Form.Group>
                    <Button variant="primary" onClick={() => { iniciarSesion() }}>
                        Iniciar Secion
                    </Button>
                </Form>
            </div>
        </>
    )
}