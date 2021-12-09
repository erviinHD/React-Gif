import React, { useState } from "react";

const GifApp = () => {

    //const categories = ['One Puch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['One Puch', 'Samurai X', 'Dragon Ball']);

    const handleAdd = () => {
        setCategories([...categories, 'Demon Souls'])
        //setCategories(cats=>[...cats, 'Demon Souls'])

    }

    return (
        <>
            <h2>Gif Expert App</h2>
            <hr></hr>

            <button onClick={handleAdd}>Add Category</button>

            <ol>
                {categories.map((category) => {
                    return <li key={category}> {category} </li>
                })}
            </ol>
        </>)
}

export default GifApp;
