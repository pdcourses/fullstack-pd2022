import React from "react";
import * as api from "../../api";

function Test() {
  const data = {
    nickname: "Superman",
    realName: "Superman",
    originDescription: "superhero man",
    catchPhrase: "yes",
    superpowers: ["fly", "super strong"],
  };
  const newHero = api.createHero(data);
  console.log(newHero);
  const heroes = api.getHeroes();
  console.log(heroes);
  return <div>
    Heroes
    {newHero}
  </div>;
}

export default Test;
