import React from 'react';
import cx from 'classnames';

const buttons = ['Camel', 'Duck', 'Donut', 'Potato', 'Mash potato'];

function VotingButtons({selectedButton, dispatch}){
  function handleClick(button){
    console.log("3. dispatch new button select button");
    dispatch({
      type: 'SELECT_BUTTON',
      selectedButton: button
    })
  }

  function handleLinkClick(event){
    event.preventDefault();
    dispatch({
      type: 'RESET_BUTTON'
    })
  }

  return (
    <div>
      {buttons.map( button => {
        const classes = cx('voting-button', {
          'voting-button--selected': selectedButton === button
        });
        return (
          <button
            key={button}
            className={classes}
            onClick={event => handleClick(button)}
          >{button}</button>
        
          );
        })}
        <a onClick={event => handleLinkClick(event)} href="www.google.com"><button
        className="voting-button"
      >Clear</button></a>
    </div>
  );
}

export default VotingButtons;
