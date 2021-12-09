import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifApp = () => {

    //const categories = ['One Puch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['Star Wars']);

    //const handleAdd = () => {
    //    setCategories([...categories, 'Demon Souls'])
    //    //setCategories(cats=>[...cats, 'Demon Souls'])
    //}

    return (
        <>
            <h2>Gif Expert App</h2>
            <hr></hr>

            <AddCategory setCategories={setCategories} />

            <ol>
                {categories.map((category) =>
                (
                <GifGrid
                    key={category}
                    category={category} 
                />))}
            </ol>
        </>)
}

export default GifApp;
