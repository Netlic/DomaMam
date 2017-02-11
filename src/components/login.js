import React from 'react'
import LoginInput from './loginInput'
import LoginBtn from './loginButton'

const Login = () => {
  return(
    <div className="modal fad" id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content col-lg-6 col-lg-offset-3">
          <div className="modal-header" style={{border:'none'}}>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="col-lg-12 text-center">
              <div>
                <span className="glyphicon glyphicon-lock"></span>
              </div>
              <div>Tu sa môžete prihlásiť</div>
            </div>
          </div>
          <div className="modal-body ">
            <div className="login">
              <LoginInput/>
              <LoginInput placeholder="heslo"/>
              <LoginBtn/>
              <LoginBtn className="btn btn-warning" text="Registrovať"/>
            </div>
          </div>
          <div className="modal-footer" style={{border:'none'}}></div>
        </div>
      </div>
    </div>
  )
}

export default Login
