import { Client, Databases, Query, ID } from 'appwrite';

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject(PROJECT_ID);
const database = new Databases(client);

export const updateSearchCount = async (searchTerm, movie) => {
    /*
    1. Use Appwrite SDK to check if the search term already exists in the database.
    2. If it exists, increment the search count.
    3. If it doesn't exist, create a new document with the search term and set the count to 1.
    */
    try {
        // Check if the search term already exists
        const existingSearch = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.equal('searchTerm', searchTerm)
        ]);

        if (existingSearch.documents.length > 0) {
            // If it exists, increment the count
            const documentId = existingSearch.documents[0];
            const updatedCount = documentId.count + 1;

            await database.updateDocument(DATABASE_ID, COLLECTION_ID, documentId.$id, {
                count: updatedCount
            });
        } else {
            // If it doesn't exist, create a new document
            await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
                searchTerm,
                count: 1,
                movie_id: movie.id,
                poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            });
        }
    } catch (error) {
        console.error('Error updating search count:', error);
    }
}

export const getTrendingMovies = async () => {
    /*
    1. Use Appwrite SDK to fetch the trending movies from the database.
    2. Return the list of trending movies.
    */
    try {
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.limit(5),
            Query.orderDesc('count')
        ]);
        return result.documents;
    } catch (error) {
        console.error('Error fetching trending movies:', error);
        return [];
    }
}
