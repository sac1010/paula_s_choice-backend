function signIn(){

    return  `<div id="signModal" class="modal">
    <div class="modal1">
        <span id="dclse"><i class="fas fa-times"></i></span>
        <h1><Strong>Create Account</Strong></h1>
        <div id="ib">
            <p>Email</p>
            <input type="text" id="dmail">
        </div>
        <div id="ib1">
            <p>First Name</p>
            <input type="text" id="dsfname">
        </div>
        <div id="ib2">
            <p>Last Name</p>
            <input type="text" id="dlname">
        </div>
        <div id="ib3">
            <p>Password</p>
            <input type="password" id="dspass">
        </div>
        <div id="ib4">
            <h2>Create Account</h2>
        </div>
        <div id="or">
            <p><span>or</span></p>
        </div>
        <div id="ib5">
            <a href="">
                <h2>SIGN IN</h2>
            </a>
        </div>
        <div id="or">
            <p><span>or</span></p>
        </div>
        <div id="ib6">
            <a href="">
                <h4><i class="fab fa-facebook"></i> SIGN IN WITH FACEBOOK</h4>
            </a>
        </div>
    </div>
  </div>`
}

export default signIn