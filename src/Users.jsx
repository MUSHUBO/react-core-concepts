import { use } from "react"

export default function Users({fetchUsers}) {

    const users = use(fetchUsers);
    console.log(fetchUsers)

    return (
        <div className="users">
            <h3>Users: {users.length} </h3>
        </div>
    )
}