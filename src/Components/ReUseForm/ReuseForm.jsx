

const ReuseForm = ({formTitle,handleForm,submit='submit'}) => {
    
    return (
        <div>
            <h2>{formTitle}</h2>
             <form onSubmit={handleForm}>
        <input type="text" name="name" placeholder="name" /> <br />
        <input type="email" name="email" placeholder="email" /> <br />
        <input type="password" name="password" placeholder="password" /><br />
        <input type="submit" value={submit}/>
    </form>
        </div>
    );
};

export default ReuseForm;