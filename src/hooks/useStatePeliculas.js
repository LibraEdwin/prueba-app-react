import { useEffect, useState } from "react";

export const useStatePeliculas = () => {

    const [pelicula, setPelicula] = useState([])

    useEffect(() => {
        const getEvento = async () => {
            let resp1 = await fetch('https://swapi.dev/api/films/1/')
            let data1= await resp1.json()
            let resp2 = await fetch('https://swapi.dev/api/films/2/')
            let data2 = await resp2.json()
            let resp3 = await fetch('https://swapi.dev/api/films/3/')
            let data3 = await resp3.json()
            let resp4 = await fetch('https://swapi.dev/api/films/6/')
            let data4 = await resp4.json()
            setPelicula(
                [{
                    id: data1.episode_id,
                    titulo: data1.title,
                    Opening_craw: data1.opening_crawl,
                },
                {
                    id: data2.episode_id,
                    titulo: data2.title,
                    Opening_craw: data2.opening_crawl
                },
                {
                    id: data3.episode_id,
                    titulo: data3.title,
                    Director: data3.director,
                    Opening_craw: data3.opening_crawl
                },
                {
                    id: data4.episode_id,
                    titulo: data4.title,
                    Director: data4.director,
                    Opening_craw: data4.opening_crawl
                }]
            )
        }
        getEvento()
    }, []);

    return {
        pelicula
    }
}
