import { db } from "@/utils/dbConnection";
import { user } from "@/db/schema/user";
import { NextResponse } from "next/server";
export async function POST(request : Request){
   try {
    console.log("entering")
      const {name,email,password} = await request.json();
      const insertUser = await db.insert(user).values({
            name,
            email,
            password
      }).returning({insertedId : user.id})
      console.log(insertUser)
        return NextResponse.json({"message":"success"},{status:200})

    
   } catch (error) {
    console.log(error)
    return NextResponse.json({error:"error"},{status:500})
    
   }
}