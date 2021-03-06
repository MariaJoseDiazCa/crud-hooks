import React, { useState } from 'react';
import { useForm } from 'react-hook-form'

const AddUserForm = (props) => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        // data.id = null
        console.log(data)
        props.addUser(data)
        e.target.reset();
    }

    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nombre</label>
            <input type="text" name="name" ref={
                register({
                    required: {value: true, message: 'Campo Requerido'}
                })
            }/>
            <div>
                {errors?.name?.message}
            </div>
            <label>Nombre de usuario</label>
            <input type="text" name="username" ref={
                register({
                    required: {value: true, message: 'Campo Requerido'}
                })
            }/>
            <div>
                {errors?.username?.message}
            </div>
            <button>Añadir nuevo usuario</button>
      </form>
     );
}
 
export default AddUserForm;