import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = async () => {
        try {
            setLoading(true)
            const res = await axios.get('https://jsonplaceholder.typicode.com/users');
            setLoading(false)
            console.log('res', res);
            const data = res.data
            setUsers(data)
        } catch (err) {
            console.log(err);
            setError(err);
            setLoading(false);
        }
    }
    if (!loading) {
        if (error) {
            return <div>{console.error(error.message)}</div>
        } else {
            return <div>
                {users.map((user) => {
                    return <p key={user.id}>{user.name}</p>
                })}
            </div>
        }
    } else {
        return <h2>Loading---</h2>
    }
}

export default Users
