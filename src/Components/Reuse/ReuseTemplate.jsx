

const ReuseTemplate = ({formtitle,submitBtn='submit',handleForm,children}) => {
    const handleDefaultChange=e=>{
        e.preventDefault()
        const data={
            name:e.target.name.value,
            email:e.target.email.value,
            password:e.target.password.value
        }
        handleForm(data)
    }
    return (
        <div>
                {children}
             <form onSubmit={handleDefaultChange}>
        <input type="text" name="name" placeholder="name" /> <br />
        <input type="email" name="email" placeholder="email" /> <br />
        <input type="password" name="password" placeholder="password" /><br />
        <input type="submit" value={submitBtn}/>
        </form>
        </div>
    );
};

export default ReuseTemplate;