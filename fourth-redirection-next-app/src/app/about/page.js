import { redirect } from "next/navigation";

export default function page(){
    redirect('/');
    return(
        <div>
            <h1>This is About Page</h1>
        </div>
    )
}