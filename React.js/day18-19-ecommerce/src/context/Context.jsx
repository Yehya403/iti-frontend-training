import React, { createContext, useState } from 'react'


export const gState = createContext()
const Context = (props) => {
    const [data , setData] = useState({
      isLoggedIn : false , 
      userData :{
        id: "",
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        gender: "",
        image: "",
      }
    })
    const {children} = props
  return (
    <gState.Provider value={{data , setData}}>
        {children}
    </gState.Provider>
  )
}

export default Context