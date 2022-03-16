import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import userActions from '../../redux/actions/userActions';
import { Link as LinkRouter } from 'react-router-dom';
import GoogleSignUp from './GoogleSignUp'
import FacebookSignUp from './FacebookSignUp';

function SignUp(props) {
    const mascotas = ["perro", "gato", "loro", "rana"]

    console.log(props)
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target[3].value)
        const userData = {
            fullName: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value,
            from: "form-Signup"
        }
        props.signUpUser(userData)

    }

    return (
        <>

            <article className="card-body mx-auto" style={{ maxWidth: 400 }}>

                <h4 className="card-title mt-3 text-center">User Account</h4>
                <p className="text-center">Get started with your free account</p>

                <p className="divider-text">
                    <span className="bg-light">OR</span>
                </p>
                <GoogleSignUp />
                <FacebookSignUp />
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
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                        </div>
                        <select id="gender" class="form-select">
                            {mascotas.map(mascota =>
                                <option>{mascota}</option>
                            )}
                        </select>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
                    </div>
                    <div className="text-center">Have an account? <LinkRouter to="/">SignIn</LinkRouter> </div>
                </form>
            </article>
        </>
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