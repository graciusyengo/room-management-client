import React from 'react'
import { useUser } from '../../context/UserContext';
import "./Dashboard.css"

function Dashboard() {
  const { user, logout } = useUser();

  return (

    <div className='dashboard'>
    {user ? (
      <div>
        <p><strong>Email:</strong>Bonjour  {user.email}</p>
        
        <button onClick={logout}>Logout</button>
      </div>
    ) : (
      <p>Aucun utilisateur connecté</p>
    )}
  </div>
  
  )
}

export default Dashboard