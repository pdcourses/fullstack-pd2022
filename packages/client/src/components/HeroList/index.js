import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import {
  getHeroesAction,
  getPowersAction,
  deleteHeroAction,
} from "../../actions/actionCreators";

function HeroList({
        powersData: {powers},
        heroesData: {isFetching, error, heroes},
        getPowers,
        getHeroes,
        deleteHero
}) {
  useEffect( () => {
    getPowers();
  }, []);

    useEffect( () => {
      getHeroes();
    }, [heroes.length]);

      const mapHeroes = ({id, nickname, originDescription, catchPhrase, realName, superpowers}) => (
      <li key={id}>
        <button onClick={() => deleteHero(id)}>X</button>
        nickname: {nickname} ,realname:{realName}
        <p>description: {originDescription}</p>
        <p>catch phrase: {catchPhrase}</p>
        <ol>
          <p>hero powers:</p>
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
    getHeroes: () => dispatch(getHeroesAction()),
    deleteHero: (id) => dispatch(deleteHeroAction(id))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);


