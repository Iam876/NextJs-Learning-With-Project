
async function userData(id){
    let response = await fetch(`http://localhost:3000/api/users/${id}`);
    let data = await response.json();
    return data.return;
}

export default async function UserId({params}){
    const userDetails = await userData(params.userId);
    return(
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
                User Details for ID: {params.userId}
            </h1>
            <div className="space-y-4">
                <div className="flex items-center">
                    <span className="font-medium text-gray-600 w-24">ID:</span>
                    <span className="text-gray-900">{userDetails.id}</span>
                </div>
                <div className="flex items-center">
                    <span className="font-medium text-gray-600 w-24">Email:</span>
                    <span className="text-gray-900">{userDetails.email}</span>
                </div>
                <div className="flex items-center">
                    <span className="font-medium text-gray-600 w-24">Address:</span>
                    <span className="text-gray-900">{userDetails.address.street}</span>
                </div>
                <div className="flex items-center">
                    <span className="font-medium text-gray-600 w-24">Phone:</span>
                    <span className="text-gray-900">{userDetails.phone}</span>
                </div>
                <div className="flex items-center">
                    <span className="font-medium text-gray-600 w-24">Website:</span>
                    <a
                        href={`https://${userDetails.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        {userDetails.website}
                    </a>
                </div>
            </div>
        </div>
    </div>
    )
}