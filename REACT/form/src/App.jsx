import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm, } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()

  const delay = (d) => {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    })

  }



  const onSubmit = async (data) =>{
    await delay(4);
    console.log(data)
    if(data.username !== "pradip"){
      setError("myform", {message: "your form is not in good order"})
    }
  }

  return (
    <>
    {isSubmitting && <div>loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' {...register("username", { required: { value: true, message: "this field is required" }, minLength: { value: 3, message: "min langth is 3" }, maxLength: { value: 8, message: "max langth is 8" } })} type="text" />
          {errors.username && <div>{errors.username.message}</div>}
          <br />
          <input placeholder='password' {...register("password",{ required: { value: true, message: "this field is required" }, minLength: { value: 3, message: "min langth is 3" }, maxLength: { value: 8, message: "max langth is 8" } })}  type="password" />
          {errors.password && <div>{errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="submit" />
          {errors.myform && <div>{errors.myform.message}</div>}
        </form>
      </div>
    </>
  )
}


export default App
