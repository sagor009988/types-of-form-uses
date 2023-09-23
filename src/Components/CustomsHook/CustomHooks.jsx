import useInputState from "../../Hooks/useInputState";



const CustomHooks = () => {
    // const [name,handleNameChange]=useInputState('sohel')
const emailState=useInputState('sohel@gmail.com')
const handlesubmit=e=>{
    e.preventDefault();
    console.log(emailState.value);

}
console.log(emailState);

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input type="text" name="name"  /> <br />
                <input
                {...emailState}
                 type="email" name="email"  /> <br />
                <input type="password" name="password"  /> <br />
                <input type="submit" value="submit" />
               
            </form> 
               
        </div>
    );
};

export default CustomHooks;