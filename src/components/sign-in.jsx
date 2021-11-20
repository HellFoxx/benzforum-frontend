import react from "react";
import '../css/sign-in.css';

export default function SignIn() {
   
    return (
        <div className="sign-in-content">
            <div className="sign-in-form">
                <h1>Войти</h1>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Никнейм</label>
                        <input type="email" class="form-control" id="exampleInputEmail1"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>  
        </div>
    )

}