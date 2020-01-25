import React from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'
import { Dispatch } from 'redux';
import { updateSearchTerm, SearchState } from './redux/search';

const App: React.FC<{searchTerm: string, updateTerm: (term: string) => void}> = ({ searchTerm, updateTerm }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="search">
          <input
            className="text-5xl text-black rounded"
            id="search"
            type="text"
            onChange={(e) => {
              updateTerm(e.target.value)
            }}
            value={searchTerm}
            placeholder="Search">
          </input>
        </div>
      </header>

    </div>
  );
}

const dispatchToProps = (dispatch: Dispatch) => {
  return {
    updateTerm: (term: string) => dispatch(updateSearchTerm(term))
  }
}

const stateToProps = (state: SearchState) => ({
  searchTerm: state.searchTerm
})

export default connect(stateToProps, dispatchToProps)(App);
