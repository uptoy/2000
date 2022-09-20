import { useEffect, useState } from "react"
import axios from 'axios'


interface IUser {
  username: string

}

export const User = () => {

  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get<IUser[]>(`${process.env.REACT_APP_API_URL}/users`)
      // const res = await axios.get<IUser[]>(`http://localhost:8080/todos`)
      setUsers(res.data)
    }
    getUsers()
  }, [])
  return (<div>{users && users.map((user, index) => <div key={index}>{user.username}</div>)}</div>)

}