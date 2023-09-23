

const SubmitInput = () => {
    const handleSubmitForm=e=>{
        e.preventDefault()
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value)
        console.log('hello');
    }


  return (
   <div>
    <form onSubmit={handleSubmitForm}>
        <input type="text" name="name" placeholder="name" /> <br />
        <input type="text" name="email" placeholder="email" /> <br />
        <input type="text" name="phone" placeholder="phone" /><br />
        <input type="submit" value="submit" />
    </form>
   </div>
  )
};

export default SubmitInput;