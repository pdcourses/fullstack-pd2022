import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import {
  getHeroesAction,
  getHeroesRequest,
  getHeroesSuccess,
  getHeroesError,
} from "../../actions/actionCreators";

function HeroList({
        heroes: {isFetching, error, heroes},
        getHeroes
}) {
    useEffect( () => {

    }, [heroes.length]);

    const mapHeroes = ();

  return(
    <>
    {isFetching && <div>loading...</div>}
    {error && <div>Error loading</div>}
    <ul>{heroes.map(mapHeroes)}</ul>
    </>
  )
}

const mapStateToProps = (heroes) => ({
    heroesReducer
});

const mapDispatchToProps = dispatch => ({
    getHeroes: () => dispatch(getHeroesAction)
}); 

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);
