import { user } from "@/app/util/db";
import { NextResponse } from "next/server";

export function GET(){
    const data = user;
    return NextResponse.json(data,{status:200});
}

export async function POST(request){
    const payload = await request.json();
    if(!payload.name || !payload.age || !payload.phone){
        const missingFields = [];
        if(!payload.name) missingFields.push('name');
        if(!payload.age) missingFields.push('age');
        if(!payload.phone) missingFields.push('phone');
        return NextResponse.json({result:`required data '${missingFields.join(', ')}' not found`,success:false},{status:404});  
    }
    return NextResponse.json({result:payload,success:true},{status:201});
}