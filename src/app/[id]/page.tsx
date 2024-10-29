// app/[id]/page.tsx

import { MongoClient, ObjectId } from "mongodb"; // Import ObjectId
import { useEffect, useState } from "react";

interface Paster {
    title: string;
    content: string;
    createdAt: string;
}

// Connect to MongoDB
async function connectToDatabase() {
    const client = new MongoClient(process.env.MONGODB_URI || "", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    await client.connect();
    return client;
}

// Fetch data by ID
const fetchPasterById = async (id: string): Promise<Paster | null> => {
    const client = await connectToDatabase();
    const database = client.db("pasterdb"); // Replace with your database name
    const pastersCollection = database.collection("pasters");
    const paster = await pastersCollection.findOne({ _id: new ObjectId(id) }); // Use ObjectId
    client.close();
    return paster ? { ...paster, createdAt: paster.createdAt.toISOString() } : null;
};

const PasterDetail = async ({ params }: { params: { id: string } }) => {
    const { id } = params; // Get the ID from the URL
    const paster = await fetchPasterById(id); // Fetch the document

    if (!paster) {
        return <p>No data found.</p>;
    }

    return (
        <div>
            <h2>{paster.title}</h2>
            <p>{paster.content}</p>
            <p>Created at: {new Date(paster.createdAt).toLocaleString()}</p>
        </div>
    );
};

export default PasterDetail;