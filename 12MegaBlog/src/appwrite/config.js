import conf from '../conf/conf.js';
import { Client,ID, Account, Databases, Storage,Query} from 'appwrite';

export class Service{
    client=new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl) // Set the Appwrite endpoint
        .setProject(conf.appwriteProjectId); // Set the Appwrite project ID
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            const post = await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
            return post;
        } catch (error) {
            console.log("AppWrite Service::createPost::error",error);
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        //we are taking slug seperately because it is the unique identifier for the post
        // and we are updating the post with the same slug
        // we are using the updateDocument method to update the post
        //we are not taking userId here because we are not updating the userId of the post
        try {
            const post = await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );
            return post;
        } catch (error) {
            console.log("AppWrite Service::updatePost::error",error);
            return false;
        }
    }

    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.log("AppWrite Service::deletePost::error",error);
            return false;
        }
    }

    async getPost(slug){
        try {
            const post = await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return post;
        } catch (error) {
            console.log("AppWrite Service::getPost::error",error);
            return false;

        }
    }
    //now here we are writing query to get the required posts whose status is active 
    async getPosts(queries=[Query.equal('status', 'active')]){
        try {
            const posts = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            );
            return posts;
        } catch (error) {
            console.log("AppWrite Service::getPosts::error",error);
            return false;
        }
    }

    //file upload
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("AppWrite Service::uploadFile::error",error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("AppWrite Service::deleteFile::error",error);
            return false;
        }
    }

    //file preview
    //this gives very fast response thus we dont need to write async 
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
};

const service=new Service();
//here we are creating an instance of Service so that we can use it in our application and
// all the definitions are in the Service class
export default service;