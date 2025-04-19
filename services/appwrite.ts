
import { Client,  Databases, Query } from 'react-native-appwrite';

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;
const ENDPOINT_URL = process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!;
const PROJECT_ID = process.env.EXPO_PUBLIC_APPWRITE_KEY!;

let client : Client;


client = new Client()

client.setEndpoint(ENDPOINT_URL).setProject(PROJECT_ID);

const database = new Databases(client)



export const searchCount = async (query : string, movie : Movie) => {
    //? Check if a record of the search has been already stored 
    const result = await database.listDocuments(DATABASE_ID,COLLECTION_ID , [
       Query.equal('searchTerm',query)
    ]);


    //? if document exists increment the count

    //? if document does not exist create a new one
}