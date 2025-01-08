"use client";
import { API_BASE_URL } from "@/config/constants";
// import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  console.log("Server Password:", process.env.SERVER_PASSWORD);
  console.log("Database Password:", process.env.DB_PASSWORD);
  const api_data = API_BASE_URL;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getData() {
      let response = await fetch(api_data);
      let data = await response.json();
      setUsers(data);
    }
    getData();
  }, []);

  console.log(users);

  return (
    <div>
      {process.env.NODE_ENV === "development" ? (
        <h1 style={{ backgroundColor:'red',border: "2px solid red" }}>Development Mode</h1>
      ) : (
        <h1 style={{ border: "2px solid red" }}>Production Mode</h1>
      )}

      <h1>This is Home Page</h1>
      {
        users.map((user)=>(
          <ul key={user.id}>
            <li>{user.name}</li>
          </ul>
        ))
      }
    </div>
  );
}
