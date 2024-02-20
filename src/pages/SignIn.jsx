import React from "react";

import Public from "../layouts/Public";
import Title from "../components/Title";
import UserForm from "../components/UserForm";
import { Link } from "react-router-dom";

function SignIn(){
    return(
        <Public>
            <div className="grid justify-items-center gap-5">
                <Title />
                <UserForm buttonValue="Acessar Plataforma" />
                <p>Não possui uma conta? <Link to="/signup" className="text-blue-500 hover:underline">Crie uma agora!</Link></p>
            </div>
        </Public>
    );
}

export default SignIn;