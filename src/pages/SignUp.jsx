import React from "react";
import { useForm } from 'react-hook-form'
import classNames from "classnames";


import Public from "../layouts/Public";

function SignUp(){
    const { register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    const invalidEmail = classNames("border-2", {
        "border-gray-300": !errors.email,
        "border-red-500 bg-red-100": errors.email 
    })
    const invalidPassword = classNames("border-2", {
        "border-gray-300": !errors.password,
        "border-red-500 bg-red-100": errors.password
    })

    return(
        <Public>
            <div className="grid justify-items-center  gap-5">
                <h1 className="text-3xl text-sky-500">Yetflix</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="w-96 grid col-span-1 gap-2 *:rounded *:h-11 *:pl-3">
                    <input {...register("email", {required: true})} 
                        type="email" id="emailInput" placeholder="email@exemplo.com" 
                        className={invalidEmail} 
                    />
                    
                    <input {...register("password", {required: true, minLength: 8})} 
                        type="password" id="passwordInput" placeholder="senha" 
                        className={invalidPassword}
                    />

                    <input type="submit" value="Criar uma nova conta" 
                        className="text-slate-100 bg-emerald-500 hover:bg-emerald-600 duration-200 mt-4" 
                    />
                </form>

                <p>Já possui uma conta? <a href="" className="text-blue-500 hover:underline">Acesse agora!</a></p>
            </div>
        </Public>
    );
}

export default SignUp;