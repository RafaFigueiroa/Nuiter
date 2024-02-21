import React from 'react';

import { useForm } from 'react-hook-form'
import classNames from 'classnames';

function Nuiting(){
    const { register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    //verificação do tamanho do texto
    var len;
    if(watch("message") !== undefined ){
        len = 255 - watch("message").length;
    }
    else{
        len = 255;
    }

    //estilização condicional
    const invalidMessage = classNames("border-2", {
        "border-gray-200": len>=0,
        "border-red-500 bg-red-100": len<0
    })
    const invalidLength = classNames("text-green-600", {
        "text-red-500": len<0
    })

    return(
        <form onSubmit={handleSubmit(onSubmit)} className='grid *:rounded gap-3'>
            <label htmlFor="" className='mx-2'>Nuíte agora mesmo...</label>
            <textarea {...register("message", {required: true, maxLength: 255})}
                id="" cols="1" rows="6"
                className={invalidMessage}
            /> 
            <div className='flex justify-between'>
                <p className={invalidLength}>Você ainda pode digitar {len} caracteres</p>
                <input type="submit" value="nuitar" className='text-slate-100 bg-sky-500 px-3 py-2 rounded hover:bg-sky-600 duration-100'/>
            </div>
        </form>
    );
}

export default Nuiting;