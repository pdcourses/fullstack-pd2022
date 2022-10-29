import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import {
  getHeroesAction,
} from "../../actions/actionCreators";

function HeroList({
        heroes: {isFetching, error, heroes},
        getHeroes
}) {
    useEffect( () => {
      getHeroes();
    }, [heroes.length]);

    const mapHeroes = ({id, nickname, originDescription, catchPhrase, realName}) => (
      <li key={id}>
        {nickname} {realName}
        <p>{originDescription}</p>
        <p>{catchPhrase}</p>
      </li>
    );
  return(
    <>
    {isFetching && <div>loading...</div>}
    {error && <div>Error loading</div>}
    <ul>{heroes.map(mapHeroes)}</ul>
    </>
  )
}

const mapStateToProps = (heroesReducer) => ({
    heroesReducer
});

const mapDispatchToProps = dispatch => ({
    getHeroes: () => dispatch(getHeroesAction)
}); 

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);
