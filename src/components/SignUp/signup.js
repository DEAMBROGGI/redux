import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import userActions from '../../redux/actions/userActions';
import {Link as LinkRouter } from 'react-router-dom';

 function SignUp(props) {
console.log(props)
    const handleSubmit = (event) => {
        event.preventDefault()

        const userData={
            fullName:event.target[0].value,
            email:event.target[1].value,
            password:event.target[2].value,
            from:"form-Signup"
        }
        props.signUpUser(userData)
        
    }
    console.log(props.message)
    alert(props.message.message)
    return (

        <form onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                </div>
                <input name="fullName" className="form-control" placeholder="Full name" type="text" />
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                </div>
                <input name="email" className="form-control" placeholder="Email address" type="email" />
            </div>

            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                </div>
                <input name='password' className="form-control" placeholder="Create password" type="password" />
            </div>

            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
            </div>
            <div className="text-center">Have an account? <LinkRouter to="/">SignIn</LinkRouter> </div>
        </form>
    )

}

const mapDispatchToProps = {
    signUpUser: userActions.signUpUser,
    
}
const mapStateToProps = (state) => {
	return {
		message: state.userReducer.message,
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(SignUp);