
import { pgTable,serial,text,timestamp } from "drizzle-orm/pg-core";
import { user } from "./user";
export const address  = pgTable("address",{
    
        id : serial("id").notNull().primaryKey(),
        address : text("address").notNull(),
        city : text("city").notNull(),
        state : text("state").notNull(),
        country : text("country").notNull(),
        pincode : text("pincode").notNull(),
        created_at : timestamp("created_at").defaultNow(),
        user_id : serial("user_id").references(()=>user.id)
})