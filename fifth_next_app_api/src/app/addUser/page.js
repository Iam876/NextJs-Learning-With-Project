'use client';
import { useState } from "react"

export default function AddUser(){
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [phone,setPhone] = useState("");
    const submitData = async ()=>{
        let response = await fetch('http://localhost:3000/api/users',{
            method:"POST",
            body:JSON.stringify({name,age,phone})   
        });
         response = await response.json();
        
        if(response.success){
            alert("DATA CREATED")
        }else{
            alert("FAILED TO CREATE DATA -- "+response.result);
        }
        
    }
    return(
        <div className="p-4 max-w-sm mx-auto bg-white shadow-md rounded">
    
        {/* Name Field */}
        <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
            <input
                type="text"
                value={name}
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                onChange={(e)=>setName(e.target.value)} placeholder="Enter your name"
            />
        </div>

        {/* Age Field */}
        <div className="mb-4">
            <label htmlFor="age" className="block text-gray-700 font-medium mb-2">Age</label>
            <input
                type="number"
                value={age}
                id="age"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                onChange={(e)=>setAge(e.target.value)} placeholder="Enter your age"
            />
        </div>

        {/* Phone Field */}
        <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
            <input
                type="tel"
                value={phone}
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                onChange={(e)=>setPhone(e.target.value)} placeholder="Enter your phone number"
            />
        </div>

        {/* Submit Button */}
        <div>
            <button
                onClick={submitData}
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
            >
                Submit
            </button>
        </div>
    
</div>

    )
}