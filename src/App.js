
import React, {useEffect} from 'react'
import './App.css';
import Container from './components/SignUp/container';
import Snackbar from './components/Snackbar';
import { connect } from 'react-redux';
import userActions from './redux/actions/userActions';

function App(props) {
  useEffect(() => {
 
    if(localStorage.getItem('token')!== null){
      const token = localStorage.getItem("token")
      props.VerificarToken(token)
    }
  },[])
  return (
    <div className="App">
      <Snackbar/>
      <Container />
    </div>
  );
}

const mapDispatchToProps = {
	VerificarToken: userActions.VerificarToken,

}



export default connect(null, mapDispatchToProps)(App);
