import { useForm } from 'react-hook-form'
import classNames from "classnames";
import { auth } from "../services/firebaseConfig";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

function LoginForm(){
    //authentication firebase hook
    const [
        signInWithEmailAndPassword,
        data, loading, error,
    ] = useSignInWithEmailAndPassword(auth);

    //form hook
    const { 
        register, handleSubmit, 
        formState: {errors}
    } = useForm();

    //creating user
    const onSubmit = async (data) => {
        try{
            await signInWithEmailAndPassword(data.email, data.password)
        }
        catch(error){
            console.error("Erro ao autenticar usuário: ", error.message);
        }
    };

    //auth returns
    if(error){
        return <p>{error.message}</p>
    }
    if(loading){
        return <p>Carregando...</p>
    }
    if(data){
        return <p>Usuário conectado: {data.user.email}</p>
    }

    //conditional styling
    const invalidEmail = classNames("border-2", {
        "border-gray-300": !errors.email,
        "border-red-500 bg-red-100": errors.email 
    })
    const invalidPassword = classNames("border-2", {
        "border-gray-300": !errors.password,
        "border-red-500 bg-red-100": errors.password
    })
    
    return(
        <form onSubmit={handleSubmit(onSubmit)} className="w-96 grid col-span-1 gap-2 *:rounded *:h-11 *:pl-3">
            <input 
                {...register("email", {required: true})} 
                type="email" 
                id="emailInput" 
                placeholder="email@exemplo.com" 
                className={invalidEmail} 
            />
            
            <input 
                {...register("password", {required: true, minLength: 8})} 
                type="password" 
                id="passwordInput" 
                placeholder="senha" 
                className={invalidPassword}
            />

            <input 
                type="submit" 
                value="Acessar Plataforma"
                className="text-slate-100 bg-emerald-500 hover:bg-emerald-600 duration-200 mt-4" 
            />
        </form>
    );
}

export default LoginForm;