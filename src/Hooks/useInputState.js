import { useState } from "react"

const useInputState=(defaultValue=null)=>{
    const [value,setValue] =useState(defaultValue);
    const onhandle=e=>{
        setValue(e.target.value)
    }
  
    return {value,onhandle}
}
 export default useInputState;
