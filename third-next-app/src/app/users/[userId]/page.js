import getUser from "../../../../services/getUsers"

export default async function page({params}){
    const id = await params;
    const getUserList = getUser();
    const users = await getUserList;
    const currentId = id.userId;
    const userData = users[currentId-1];

    return(
        <div>
            <h1 className="border-b-8">User Data Page</h1>
            
                    <ul className="" key={userData.id}>
                        <li>{userData.name}</li>
                        <li>{userData.email}</li>
                        <li>{userData.address.street}</li>
                        <li>{userData.phone}</li>
                        <li>{userData.website}</li>
                        <li>{userData.company.name}</li>
                    </ul>
        </div>
    )
}


/*
This is for generating static pages based on the api data.
*/
export async function generateStaticParams() {
    const getUserList = getUser();
    const users = await getUserList;
    return users.map((item=>({
        userId:item.id.toString()
    })))
}

