import React from 'react'
import { UserConsumer } from '../context/context'

function ComponentC(props) {
    return (
        <div>
            <UserConsumer>
                {
                    (userData) => {
                        return (
                            <p style={{ color: 'blue' }}>{userData}</p>
                        )
                    }
                }

            </UserConsumer>

            Data from props drilling - {props.uname}
        </div>
    )
}

export default ComponentC
