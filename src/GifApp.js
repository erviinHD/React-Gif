import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const GifApp = () => {

    //const categories = ['One Puch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['One Puch', 'Samurai X', 'Dragon Ball']);

    //const handleAdd = () => {
    //    setCategories([...categories, 'Demon Souls'])
    //    //setCategories(cats=>[...cats, 'Demon Souls'])
    //}

    return (
        <>
            <h2>Gif Expert App</h2>
            <hr></hr>

            <AddCategory setCategories={setCategories}/>

            <ol>
                {categories.map((category) => {
                    return <li key={category}> {category} </li>
                })}
            </ol>
        </>)
}

export default GifApp;
