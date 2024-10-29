import connectToDatabase from "@/dbconfig/dbconfig";
import Paster from "../../../models/pasterModel"
import { NextRequest, NextResponse } from "next/server";
import { log } from "console";

connectToDatabase();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const {title, content} = reqBody;
        console.log(reqBody);

        const newPaster = new Paster({
            title: title,
            content: content
        })

        // const savedPaster = 
        await newPaster.save();
        // console.log(savedPaster);
        
        const response = NextResponse.json ({
            message: "Pasted successfully",
            success: true,
        })
        
        return response

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}