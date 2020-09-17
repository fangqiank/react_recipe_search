import React from "react";

const Recipe = ({ title, calories, img, ingredients }) => {
  return (
    // <>
    //   <h1>{title}</h1>
    //   <p>Calories:{calories}</p>
    //   <img src={img} alt="" />
    // </>
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={img} alt="" />
        </div>
        <div className="card-back">
          <h1>{title}</h1>
          <ul>
            <li>
              <strong>Calories:</strong> {calories}
            </li>
            <p>Ingredients:</p>
            <br />
            <ol>
              {ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.text}:{ingredient.weight}
                </li>
              ))}
            </ol>
            {/* <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
