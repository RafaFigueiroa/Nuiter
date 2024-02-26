import React from "react";

import Public from "../layouts/Public";
import Title from "../components/Title";
import RegisterForm from "../components/RegisterForm";
import { Link } from "react-router-dom";

function SignUp(){
    return(
        <Public>
            <div className="grid justify-items-center gap-5">
                <Title />
                <RegisterForm />               
                <p>Já possui uma conta? <Link to="/signin" className="text-blue-500 hover:underline">Acesse agora!</Link></p>
            </div>
        </Public>
    );
}

export default SignUp;