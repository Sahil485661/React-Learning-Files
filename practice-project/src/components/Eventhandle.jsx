// Here we learning Event Handling date 08/07/26 to 09/07/26


import React from 'react'

function Eventhandle() {
    function handleHover(){
        alert("Here you hover")
    }
    function  handleForm(e){
      console.log("e.target.value", e.target.value)
    }
    function handleSubmit(e){
      // e.default()  //Here this line is use for submit data to the server
      e.preventDefault(); // this line is preventing the submit form
      alert("your data not submited right now")
    }
  return (
    <div>
        <p onMouseOver={handleHover}>Hello here if hover your mouse find something</p>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" onChange={handleForm}/>
          <button type='submit'>Submit</button>
          {/* Immediate invoke iss line ki help se call hoga interview qustion hai  */}
          <button onClick={alert("click hua hai ")}>CLick me </button>

          {/* Immediate invoke ko prevent kaise karenge */}
          <button onClick={()=>{alert("Ye ab button click karne par call hua hai")}}>Click invoke</button>
        </form>
    </div>

  )
}

export default Eventhandle