import { useEffect, useState } from "react";

export const useStatepeli = (url) => {

    const [pelicula, setPelicula] = useState([])

    useEffect(() => {
        const getEvento = async () => {
            let resp = await fetch(url)
            let data= await resp.json()
            setPelicula(
                {
                    id: data.episode_id,
                    titulo: data.title,
                    Director: data.director,
                    Productor: data.producer,
                    Opening_craw: data.opening_crawl,
                    apiPersonajes: data.characters
                }
            )
        }
        getEvento()
    }, []);

    return {
        pelicula
    }
}
