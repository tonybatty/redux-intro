import { connect } from 'react-redux';
import CountrySelector from '../components/CountrySelector.js'
import { setSelectedCountry, setCountryListOpen } from '../actions';

const mapStateToProps = state => {
  return {
    selectedCountry: state.country.selectedCountry,
    countryListOpen: state.country.countryListOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleFocus: () => dispatch(setCountryListOpen(true)),
    handleBlur: () => dispatch(setCountryListOpen(false)),
    selectCountry: (country) => {
      dispatch(setSelectedCountry(country))
      dispatch(setCountryListOpen(false))
    },
  };
};

//compose

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountrySelector);
