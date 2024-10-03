
import { pgTable,serial,text,timestamp } from "drizzle-orm/pg-core";


export const user  = pgTable("user",{

    id : serial("id").notNull().primaryKey(),
    name :text("name").notNull(),
    email : text("email").notNull().unique(),
    password : text("password").notNull(),
    created_at : timestamp("created_at").defaultNow(),

})  