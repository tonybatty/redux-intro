export function selectButton(button){
  return {
    type: 'SELECT_BUTTON',
    selectedButton: button
  };
};

export function selectCountry(country){
  return {
    type: 'SET_SELECTED_COUNTRY',
    selectedCountry: country
  }
}


export function handleFocus(event){
  return {
    type: 'SET_COUNTRY_LIST_OPEN',
    countryListOpen: true
  }
}

export function handleBlur(event){
  return {
    type: 'SET_COUNTRY_LIST_OPEN',
    countryListOpen: false
  }
}
