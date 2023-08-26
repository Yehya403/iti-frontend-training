import React, { useContext, useEffect, useState } from 'react'
import {gState} from '../context/Context'
import {getSingleUser} from '../services/user.service'

const UserSettings = () => {
    const {data} = useContext(gState)
    const [userSettings , setuserSettings] = useState(null)

    const {userData} = data 
    const {id} = userData
    const getUserById = async (id) => {
        const user = await getSingleUser(id)
        setuserSettings(user)
    }

    useEffect(()=>{
        getUserById(id)
    } , [])
    
  return (
    <div>{JSON.stringify(userSettings)}</div>
  )
}

export default UserSettings