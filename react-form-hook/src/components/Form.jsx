import React from 'react'
import "./Form.css"
import {useForm} from 'react-hook-form'
function Form() {
    const {
    register,        // Registers input fields
    handleSubmit,    // Handles form submission
    formState: { errors , isSubmitting} // Contains validation errors
  } = useForm();
 async function formSubmit(data ){
    await new Promise((resolve)=>setTimeout(
        resolve, 4000))
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(formSubmit)}>
        <div className='container'>
            <label>Enter Your First Name: </label>
            <input {...register('firstName', {required: {value:true, message:"these field required"}, maxLength: {value: 10, message: "Maximum 10 characters you can add"}, minLength:{value:3, message: "Minimum 3 input required"}})} className={errors.firstName ? "err": ""} />
            {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        
        <div className='container'>
            <label >Enter Your Middle Name: </label>
            <input {...register('MiddleName', {required: {value:true, message:"these field required"}, minLength:{value: 3, message: "Minimum length should be 3"}})} className={errors.firstName ? "err": ""}/>
            {errors.MiddleName && <p>{errors.MiddleName.message}</p>}
        </div>
        
        <div className='container'>
            <label>Enter Your Last Name: </label>
            <input  {...register('LastName', {required: {value:true, message:"these field required"},maxLength: {value:10, message:"Max length should be 10"}})} className={errors.firstName ? "err": ""}/>
            {errors.LastName && <p>{errors.LastName.message}</p>}
        </div>
        <div className='container'> 

        <button type='submit' disabled= {isSubmitting} >{isSubmitting ? "Submitting Form": "Submit"}</button>
        </div>
    </form>
  )
}

export default Form