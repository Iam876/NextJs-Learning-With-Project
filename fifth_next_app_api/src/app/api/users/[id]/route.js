import { user } from "@/app/util/db";
import { NextResponse } from "next/server";

export function GET(request,{params}){
    console.log(params.id)
    const userData = user.filter((item)=>item.id==params.id);

    return NextResponse.json(userData.length==0?{return:"No Data Found",success:false}:{return:userData[0],success:true},userData.length==0?{status:404}:{status:200});
}

export async function PUT(request,content){
    let payload = await request.json();
    payload.id = content.params.id;

    if(!payload.id || !payload.name || !payload.age || !payload.phone){
        let missingFields = [];
        if(!payload.id) missingFields.push('id');
        if(!payload.name) missingFields.push('name');
        if(!payload.age) missingFields.push('age');
        if(!payload.phone) missingFields.push('phone');
        return NextResponse.json({result:`Failed to update. because '${missingFields.join(', ')}' is missing`,success:false},{status:404});

    }
    return NextResponse.json({result:payload,success:true},{status:200});
    
}