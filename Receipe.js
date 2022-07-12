import React from "react"; 3.4k

const Receipe = ({titlem, caloriesm image, ingredients}) => {
    return  (
        <div>
            <h1>
                {title}
            </h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>
                        {ingredient.text}
                    </li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} alt=""/>
            
        </div>
    );
};

export default Receipe;