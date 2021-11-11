import React from 'react'
import User from '../user/User'
import './UserTable.css'
function UserTable({userFormData}) {     
    return (
        <div className="userTable">
        <br/>
        <br/>
        <table class="table table-striped">
        <thead>
            <tr><th>First Name</th><th>Last Name</th><th>Age</th></tr>
        </thead>
        <tbody>
            {userFormData.map((user,index)=>{
                return <User key={index} user={user}/>
            })}
            </tbody>
            </table>
        </div>
    )
}

export default UserTable
