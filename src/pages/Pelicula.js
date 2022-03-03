import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { NavbarMenu } from '../components/NavbarMenu';
import { useStatepeli } from '../hooks/useStatepeli';
import { PersonajesAnewHope } from './PersonajesAnewHope';
import { PersonajesReturnoftheJedi } from './PersonajesReturnoftheJedi';
import { PersonajesRevengeoftheSith } from './PersonajesRevengeoftheSith';
import { PersonajesTheEmpireStrikesBack } from './PersonajesTheEmpireStrikesBack';
import Cookies from 'universal-cookie'
const cookies = new Cookies()

export const Pelicula = ({ number }) => {
    
    useEffect(() => {
        const componentDidMount = () => {
            if (!cookies.get('usuario')) {
                window.location.href = "/";
            }
        }
        componentDidMount()
    }, []);

    const { pelicula } = useStatepeli(`https://swapi.dev/api/films/${number}/`)

    return (
        <>
        
        <NavbarMenu />
            <Container>
                <div>
                    <h1 className='TituloPelicula'>{' ' + pelicula.titulo}</h1>
                    <h3>Director: {' ' + pelicula.Director}</h3>
                    <h3>Productor: {' ' + pelicula.Productor}</h3>
                    <h4>Opening craw: {' ' + pelicula.Opening_craw}</h4>
                </div>
                <div>
                    <h4>Personajes:</h4>
                    {(number === "1" && <PersonajesAnewHope />)||(number === "2" && <PersonajesTheEmpireStrikesBack />)||(number === "3" && <PersonajesReturnoftheJedi />)||(number === "6" && <PersonajesRevengeoftheSith />)}
                </div>
            </Container>
        </>
    )
}
