import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { usePersonajes } from '../hooks/usePersonajes'

import Cookies from 'universal-cookie'

import Chart, {
    ArgumentAxis,
    Label,
    Legend,
    Series,
} from 'devextreme-react/chart';

import moment from 'moment';

import 'moment/locale/es';

moment.locale('es')


const cookies = new Cookies()

export const PersonajesReturnoftheJedi = () => {

    useEffect(() => {
        const componentDidMount = () => {
            if (!cookies.get('usuario')) {
                window.location.href = "./";
            }
        }
        componentDidMount()
    }, []);

    const { ReturnoftheJedi } = usePersonajes()

    const [vistas, setVistas] = useState()

    useEffect(() => {

        let vista = Number(localStorage.getItem('Return of the Jedi')) + 1

        localStorage.setItem("Return of the Jedi", vista)

        setVistas(vista)

    }, [])

    const visitas = [{
        arg: moment().format('dddd D'),
        val: vistas
    }]

    console.log(visitas[0])

    return (
        <>
            <div>
                <ListGroup defaultActiveKey="#link1">
                    {ReturnoftheJedi.map((element, i) => (
                        <ListGroup.Item key={i}>
                            <div>Nombre:{element.name}</div>
                            <div>Mundo Natal:{element.homeworld}</div>
                            <div>Color de pelo:{element.hair_color}</div>
                            <div>Haltura:{element.height}</div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
            <div>
                <Chart
                    title="Vistas de los usuarios"
                    dataSource={visitas}
                    id="chart">
                    <ArgumentAxis tickInterval={10}>
                        <Label format="decimal" />
                    </ArgumentAxis>
                    <Series
                        type="bar" />
                    <Legend
                        visible={false} />
                </Chart>
            </div>
        </>
    )
}