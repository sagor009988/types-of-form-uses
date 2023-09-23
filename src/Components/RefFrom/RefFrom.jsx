import { useRef, useState } from "react";


const RefFrom = () => {
 const nameRef=useRef(null)
 const emailRef=useRef(null)
 const passwordRef=useRef(null)

 

    const handlesubmit=e=>{
        e.preventDefault();
        
           
       
            console.log(nameRef.current.value);
            console.log(emailRef.current.value);
            console.log(passwordRef.current.value);
       
        
        
    }

    return (
        <div>
              <form  onSubmit={handlesubmit}>
                <input ref={nameRef} defaultValue={'sohel'} type="text" name="name"  /> <br />
                <input ref={emailRef} type="email" name="email"  /> <br />
                <input ref={passwordRef} type="password" name="password"  /> <br />
                <input type="submit" value="submit" />
                
               
            </form>
        </div>
    );
};

export default RefFrom;