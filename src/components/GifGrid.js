import React, { useEffect, useState } from 'react'
import { GifGridItems } from './GifGridItems';

export const GifGrid = ({ category }) => {

    const [images, setimages] = useState([])

    //useEfect
    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async () => {
        const URL = 'https://api.giphy.com/v1/gifs/search?q=starwars&limit=10&api_key=7JdRpgPr7cMfns4tjwTV2lDVg083GCvf'
        const resp = await fetch(URL);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
        setimages(gifs)
    }

    //getGifs();

    return (
        <>
            <h3> {category}</h3>
            <div className="card-grid">
                {
                    images.map((img) => (
                        <GifGridItems
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>

    )
}
