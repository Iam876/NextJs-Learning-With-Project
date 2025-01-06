
import Link from "next/link";
import getUsers from "../../../services/getUsers"

export default async function User(){

    const userList = getUsers();
    const users = await userList;
    console.log("Hello"+typeof users)

    return(
        <div>
            <h1>User Data</h1>
            {
                users.map((user)=>(
                    <li key={user.id}>
                        <Link  href={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                    
                ))
            }

        </div>
    )
}