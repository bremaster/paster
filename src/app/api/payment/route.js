// pages/api/save-transaction.ts
import  { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";



const uri = process.env.MONGODB_URI; // Your MongoDB connection string

export default async function handler( NextApiRequest,NextApiResponse) {
    if (req.method === "POST") {
        const { orderId, payerId, amount } = req.body;

        try {
            const client = await MongoClient.connect(uri);
            const db = client.db("pasterdb"); // Replace with your database name

            // Save the transaction
            await db.collection("transactions").insertOne({
                orderId,
                payerId,
                amount,
                createdAt: new Date(),
            });

            client.close();
            res.status(200).json({ message: "Transaction saved successfully" });
        } catch (error) {
            console.error("Database error:", error);
            res.status(500).json({ error: "Database error" });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}