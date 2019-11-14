import React from 'react';
import AddItem from '../AddItem/AddItem';
import ItemTable from '../ItemTable/ItemTable';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const InfoPage = () => (
  <div>
    <p>
      Shelf Page
    </p>
    <AddItem />
    <ItemTable />
  </div>
);

export default InfoPage;
