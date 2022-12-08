import { useState } from "react"



function Form(){

    const [username,setUserName] = useState("")

    function nameHandler(event){
       
        setUserName(event.target.value)
    }
    
    function submitHandler(e){
        e.preventDefault()
        console.log(username)
    }
    return(
        <form>
            <input type="text" placeholder="enter your name" onChange={nameHandler} />
            <input type="email" placeholder="enter your email"/>
            <input type="number" placeholder="enter your number"/>
            <input type="password" placeholder="enter your password"/>

            <button onClick={submitHandler}>Submit form</button>
        </form>
    )
}

export default Form