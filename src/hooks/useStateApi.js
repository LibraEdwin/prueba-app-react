import { useEffect, useState } from "react";
import { CifrarAES } from "../helpers/CifrarAES";

export const useStateApi = () => {

    const [state, setState] = useState({})

    useEffect(() => {
        const getEvento = async () => {
            let resp = await fetch('https://swapi.dev/api/people/1')
            let data = await resp.json()
            setState({
                usuario: data.name,
                contraseña: CifrarAES(data.hair_color),
                FechaCreacion: data.created
            })
        }
        getEvento()
    }, []);

    return {
        state
    }
}
