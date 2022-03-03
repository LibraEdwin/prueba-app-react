import React, { useEffect } from 'react'
import { Button, Container, ListGroup } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useStateApi } from '../hooks/useStateApi'
import { useStatePeliculas } from '../hooks/useStatePeliculas'
import { NavbarMenu } from '../components/NavbarMenu'
import luke from '../asset/Luke.jpg'
import Cookies from 'universal-cookie'
const cookies = new Cookies()



export const Menu = () => {

    useEffect(() => {
        const componentDidMount = () => {
            if (!cookies.get('usuario')) {
                window.location.href = "./";
            }
        }
        componentDidMount()
    }, []);


    const { state } = useStateApi()

    const { pelicula } = useStatePeliculas()

    return (
        <>
            <NavbarMenu />
            <Container>
                <div className='divLuke'>
                    <div>
                        <h2 className='TituloPelicula'>{state.usuario}</h2>
                        <h2>Fecha de creacion: {state.FechaCreacion}</h2>
                    </div>
                    <img alt='luke' className='col-5 divLuke' src={luke} />
                </div>
                <h3>Peliculas</h3>
                <div>
                    <ListGroup defaultActiveKey="#link1">
                        {pelicula.map((element, i) => (
                            <div key={element.id} className='peliculas'>
                                <NavLink to={'/menu/pelicula/' + i} >
                                    <Button variant="outline-info">
                                        <ListGroup.Item >
                                            <div className='titulo'>{element.titulo}</div>
                                            <div>Director :{element.Director}</div>
                                            <div>Opening crawel :{element.Opening_craw}</div>
                                        </ListGroup.Item>
                                    </Button>
                                </NavLink>
                            </div>
                        ))}
                    </ListGroup>
                </div>
            </Container>
        </>
    )
}
