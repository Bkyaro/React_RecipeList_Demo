import React from 'react'
import style from './recipe.module.css'
const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1 >食物：{title}</h1>
            <p>卡路里：{calories}cal</p>
            <ul>食谱：
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ul>
            <img className={style.image} src={image}></img>
        </div>
    );
}

export default Recipe;