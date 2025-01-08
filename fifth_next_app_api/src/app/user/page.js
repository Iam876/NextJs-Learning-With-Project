import Link from "next/link";

async function userData(){
    let response = await fetch('http://localhost:3000/api/users');
    let data = await response.json();
    return data;
}

export default async function User(){
    let user = await userData();
    return(
        <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">User Table</h1>
        <table className="table-auto border-collapse border border-gray-200 w-full text-left">
            <thead>
                <tr>
                    <th className="border border-gray-300 px-4 py-2">ID</th>
                    <th className="border border-gray-300 px-4 py-2">Name</th>
                    <th className="border border-gray-300 px-4 py-2">Profile</th>
                </tr>
            </thead>
            <tbody>
                {user.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-100">
                        <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                        <td className="border border-gray-300 px-4 py-2">
                            <Link href={`/user/${item.id}`} className="text-blue-500 hover:underline">
                                View Profile
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}