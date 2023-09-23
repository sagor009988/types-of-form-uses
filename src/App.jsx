
import './App.css'
import CustomHooks from './Components/CustomsHook/CustomHooks'
import ReuseForm from './Components/ReUseForm/ReuseForm'
import RefFrom from './Components/RefFrom/RefFrom'
import ReuseTemplate from './Components/Reuse/ReuseTemplate'
import StateFull from './Components/SubmitInput/StateFull/StateFull'
import SubmitInput from './Components/SubmitInput/SubmitInput'


function App() {
//   const handleSignUpForm=e=>{
//     e.prevrntDefault()
// }
// const handleProfileForm=e=>{
//   e.prevrntDefault()
const handleSignupForm=data=>{
  console.log('sign up',data);
}
const handleProfileUpdate=data=>{
  console.log('update profile',data);
}


  return (
    <>

      {/* <CustomHooks></CustomHooks> */}
      <h1>Types of input Form</h1> 
      {/* <RefFrom></RefFrom> */}
      {/* <SubmitInput></SubmitInput>
      <StateFull></StateFull> */}
      {/* <ReuseForm formTitle={'sign up form'} handleForm={handleSignUpForm}></ReuseForm>
      <ReuseForm formTitle={'profile update'} handleForm={handleProfileForm} submit={'update'}></ReuseForm> */}

      <ReuseTemplate formtitle={'sign UP Form'} handleForm={handleSignupForm}>
        <div>
          <h1>Sign Up Form</h1>
          <h2>please Sign up the Form</h2>
        </div>
      </ReuseTemplate>
      <ReuseTemplate formtitle={'profile Update'} handleForm={handleProfileUpdate} submitBtn='Update'>
        <h1>Update the profile</h1>
        
      </ReuseTemplate>
      
    </>
  )
}

export default App
