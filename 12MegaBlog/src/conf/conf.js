const conf={
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID), 
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID), 
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID) 
}
    //this is aprocess for production grade app we get the guarantee of getting variable in string

export default conf;