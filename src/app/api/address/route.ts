
import { db } from "@/utils/dbConnection";

import { address } from "@/db/schema/address";
import { NextResponse } from "next/server";
import { user } from "@/db/schema/user";
import { eq } from "drizzle-orm";


export async function POST(request : Request){
   try {
    console.log("entering")
      const {address,city,state,country,pincode,user_id} = await request.json();
      const userExists = await db.select().from(user).where(eq(user.id,user_id))
      const insertAddress = await db.insert(address).values({
            address,
            city,
            state,
            country,
            pincode,
            user_id
      }).returning({insertedId : address.id})
      console.log(insertAddress)
        return NextResponse.json({"message":"success"},{status:200})

    
   } catch (error) {
    console.log(error)
    return NextResponse.json({error:"error"},{status:500})
    
   }
}
