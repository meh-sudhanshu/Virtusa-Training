


function Button(props){

    console.log(props)
    function buttonHandler(){
        if(props.text === 'increase'){
            if(props.num === 10){
                props.togglePopUpState()
                return
            }
            props.changeNumber(props.num + 1)
            console.log("increase is clicked")
        }else{
            if(props.num === -10){
                props.togglePopUpState()
                return
            }
            props.changeNumber(props.num - 1)
            console.log("decrease is clicked")
        }
    }
    return(
    
        <button onClick={buttonHandler}>{props.text}</button>
       
    )
}

export default Button