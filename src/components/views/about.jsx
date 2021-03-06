
import React from 'react';
import { useState } from "react";

//Esta función verifica si el formulario está vació
const isAnEmptyForm = ({ email, subject, message }) => {
  let yesIsEmpty = false;
  if (email === "" && subject === ""  && message === "") {
    yesIsEmpty = true;
  }else{
    yesIsEmpty = false;
  }
  return yesIsEmpty;
};


//Esta funcion valida que no haya errores
export function validate(input){
            let errors = {}
            if(!input.email){
                errors.email = "Please enter an email..."
            } else if(!/\S+@\S+\.\S+/.test(input.email)){
                errors.email = "Please enter a valid email..."
            }

            if (!input.subject){
              errors.subject= "Please enter a subject..."
            }else if(input.subject.length<10){
              errors.subject= "The subject must have at least 10 characters... "
            }

            if (!input.message){
                errors.message= "Please write a message..."
            }else if(input.message.length>256 ){
                errors.message= "You reach the character's limit for message."
            }


            return errors;
}

//Esta es la función principal
export default function About(){



  const [state, setState] = useState({
        email: '',
        subject: '',
        message: '',
        isAnEmptyForm: true,

    })

    const [fails, setFails] = useState({
            email: '',
            subject: '',
            message: ''

    })

//Función que de momento no se usa, es el submit
    function onSubmitForm(e){
            e.preventDefault();
            alert(`Email es ${state.email}`)
    }



//Función para manejar los cambios en cualquier campo
    function onHandleChange(e){

            setState({
                ...state,
                [e.target.name]: e.target.value,
                 isAnEmptyForm: isAnEmptyForm(state)
            })

            setFails(
                validate({
                    ...state,
                    [e.target.name]: e.target.value
                    })
                )


    }





  return(
<>

<div className="about">
  <div className="formContainer">
    <form className="formCustom">
      <h1>Contact</h1>
      <div className="formGroup">
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter your email..."
          name="email"
          value={state.email}
          onChange={(e) => onHandleChange(e)}
          ></input>
          {fails.email ? <p style={{color: 'red'}}> {fails.email}</p> : <p></p>}
      </div>

      <div className="formGroup">
        <label>Subject</label>
        <input
          type="text"
          placeholder="Subject..."
          name="subject"
          value={state.subject}
          onChange={(e) => onHandleChange(e)}
          >
        </input>
          {fails.subject ? <p style={{color: 'red'}}>{fails.subject}</p> : <p></p>}
      </div>

      <div className="formGroup">
        <label>Message</label>
        <textarea
          placeholder="Write your message..."
          name="message"
          value={state.message}
          onChange={(e) => onHandleChange(e)}
          ></textarea>
        {fails.message ? <p style={{color: 'red'}}>{fails.message}</p> : <p></p>}
      </div>
      <button
        className=
          {
            state.isAnEmptyForm
            || fails.email
            || fails.subject
            || fails.message
            ? "button_slide" : "button_slide slide_right"

          }
        disabled={
          state.isAnEmptyForm
          || fails.email
          || fails.subject
          || fails.message
          ? true : false }

        type="button"
        >Send Message</button>
  </form>
</div>



      <div id="aboutCreator">
        <p>Creator info: </p>
        <p>Maidana Leonardo G.M. - GitHub: @DevMaidanaLGM</p>
      </div>
    </div>
</>
  )

}
