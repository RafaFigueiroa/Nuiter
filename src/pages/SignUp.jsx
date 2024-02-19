import React from "react";

import Public from "../layouts/Public";

function SignUp(){
    return(
        <Public>
            <h1 className="text-3xl text-sky-600">Yetflix</h1>

            <form>
                <input type="email" name="" id="" placeholder="email@exemplo.com" />
                <input type="password" name="" id="" placeholder="Senha" />
                <input type="submit" value="Criar uma nova conta" />
            </form>

            <p>Já possui uma conta? <a href="">Acesse agora!</a></p>
        </Public>
    );
}

export default SignUp;