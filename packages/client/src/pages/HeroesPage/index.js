import React from 'react';
import HeroForm from '../../components/HeroForm';
import HeroList from '../../components/HeroList';

function HeroesPage() {
  return (
    <>
        <h2>Create new hero</h2>
        <HeroForm />
        <br/>
        <h2>HeroList component</h2>
        <HeroList />
    </>
  )
}

export default HeroesPage;