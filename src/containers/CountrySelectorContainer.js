import React from 'react';
import PropTypes from 'prop-types';
import CountrySelector from '../components/CountrySelector';
import {selectButton, selectCountry, handleFocus, handleBlur} from '../actions/index.js'

class CountrySelectorContainer extends React.Component {
  constructor(props, context){
    super(props, context);

    const reduxState = this.context.store.getState();

    this.state = {
      selectedCountry: reduxState.country.selectedCountry,
      countryListOpen: reduxState.country.countryListOpen
    }

    this.selectCountry = this.selectCountry.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentDidMount(){
    const { store } = this.context;
    store.subscribe( () => {
      this.updateFromStore();
    });
  }

  updateFromStore(){
    const { store } = this.context;

    const reduxState = store.getState();

    this.setState({
      selectedCountry: reduxState.country.selectedCountry,
      countryListOpen: reduxState.country.countryListOpen
    });
  }

  selectCountry(country){
    this.context.store.dispatch(selectCountry(country));
    this.context.store.dispatch(handleBlur(event));
  };

  handleFocus(event){
    this.context.store.dispatch(handleFocus(event));
  }

  handleBlur(event){
    this.context.store.dispatch(handleBlur(event));
  }

  render(){
    return (
      <CountrySelector
        selectedCountry={this.state.selectedCountry}
        countryListOpen={this.state.countryListOpen}
        selectCountry={this.selectCountry}
        handleFocus={this.handleFocus}
        handleBlur={this.handleBlur}
      />
    );
  }
}

CountrySelectorContainer.contextTypes = {
  store: PropTypes.object
};

export default CountrySelectorContainer;
