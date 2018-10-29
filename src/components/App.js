import React from 'react';
import VotingButtons from './VotingButtons';

class App extends React.Component {
  constructor(props){
    super(props);
    const reduxState = this.props.store.getState();
    
    this.state = {
      selectedButton: reduxState.selectedButton
    }
 
  }
  
  componentDidMount(){
    const { store } = this.props;
    console.log("2. subscribe to store")
    store.subscribe( () => {
      this.updateFromStore();
    });
  }

  updateFromStore(){
    const { store } = this.props;
    console.log("5. get updated state from redux store")

    const reduxState = store.getState();
    this.setState({
      selectedButton: reduxState.selectedButton
    }, () => console.log("6. new value fo state is xxx" + this.state.selectedButton));
    
  }

  render(){
    return (
      <div>
        <VotingButtons
          selectedButton={this.state.selectedButton}
          dispatch={this.props.store.dispatch}
        />
      </div>
    )
  }
}

export default App;
