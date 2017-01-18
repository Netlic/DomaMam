import React from 'react'

const Login = () => {
  return(
    <div className="modal fade" id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
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


            <div className="login col-lg-12">

              <div className="login-input col-lg-12">
                <div className="col-lg-6">
                  <input type="text" className="col-lg-12"/>
                </div>
                <div className="col-lg-6">
                </div>
              </div>
              <div className="login-input col-lg-12">
                <div className="col-lg-6">
                  <input type="text" className="col-lg-12"/>
                </div>
                <div className="col-lg-6">
                </div>
              </div>
              <div className="login-input col-lg-12 login-submit">
                <input type="submit" className="btn btn-primary" value="Prihlásiť"/>
              </div>
            </div>


          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
