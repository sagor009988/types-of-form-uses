import { useState } from "react";


const StateFull = () => {
 const [gmail,setGmail]=useState(null)
 const [name,setname]=useState(null)
 const [password,setPassword]=useState(null)
 const [error,setError]=useState('')

    const handlesubmit=e=>{
        e.preventDefault()
        if(password.length<6){
            setError('please input more 6 character')
        }
        else{
            setError('')
        }
        
    }
    const handleGmailChange=e=>{
        e.preventDefault()
        setGmail(e.target.value)
    }
    console.log(gmail);
    const handleNameChange=e=>{
        e.preventDefault()
        setname(e.target.value)
    }
    console.log(name);
    const handlePassword=e=>{
        e.preventDefault()
        setPassword(e.target.value)
    }
    console.log(password);

    return (
        <div>
            <form  onSubmit={handlesubmit}>
                <input onChange={handleNameChange} type="text" name="name"  /> <br />
                <input
                onChange={handleGmailChange}
                 type="email" name="email"  /> <br />
                <input onChange={handlePassword} type="password" name="password"  /> <br />
                <input type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFull;