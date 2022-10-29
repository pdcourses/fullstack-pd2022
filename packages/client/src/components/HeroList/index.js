import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import {
  getHeroesAction,
  getPowersAction
} from "../../actions/actionCreators";

function HeroList({
        powersData: {powers},
        heroesData: {isFetching, error, heroes},
        getPowers,
        getHeroes
}) {
  useEffect( () => {
    getPowers();
  }, []);

    useEffect( () => {
      getHeroes();
    }, []);

      const mapHeroes = ({id, nickname, originDescription, catchPhrase, realName, superpowers}) => (
      <li key={id}>
        {nickname} {realName}
        <p>{originDescription}</p>
        <p>{catchPhrase}</p>
        <ol>
          {powers.length && superpowers.map( s => (
            <li key={s}>
              {powers[powers.findIndex(i => s == i.id)].name}
            </li>
          ))}
        </ol>
      </li>
    );
  return(
    <>
    {isFetching && <div>loading...</div>}
    {error && <div>Error loading</div>}
    {!error && !isFetching && <ul>{heroes.map(mapHeroes)}</ul>}
    </>
  )
}

const mapStateToProps = ({powersData, heroesData}) => ({
    powersData,
    heroesData,
});

const mapDispatchToProps = dispatch => ({
    getPowers: () => dispatch(getPowersAction()),
    getHeroes: () => dispatch(getHeroesAction())
}); 

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);
