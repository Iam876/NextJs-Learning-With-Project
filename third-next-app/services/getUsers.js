export default async function getUser(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
}