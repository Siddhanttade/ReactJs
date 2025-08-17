// import conf from '../conf/conf.js';
// import { Client,ID, Account, Databases, Storage } from 'appwrite';

// export class AuthService{
//     client=new Client();
//     //if we set end points here only then it is waste of resources we want to make sure that we are using the client instance throughout the application when someone creates an object of AuthService class
//     //thus we make a constructor and set the end points in the constructor
//     account;
//     constructor(){
//         this.client
//         .setEndpoint(conf.appwriteUrl) // Set the Appwrite endpoint
//         .setProject(conf.appwriteProjectId); // Set the Appwrite project ID
//         this.account = new Account(this.client);
//         //we are creating an instance of Account class so that we can use it to authenticate the user
//     }
//     async createAccount({email, password, name}) {
//         try {
//             const userAccount = await this.account.create(ID.unique(), email, password, name);
//             if(userAccount){
//                 //call another method to create a user document in the database
//                 return this.login({email, password});
//             }else{
//                 return userAccount;
//             }
            
//         } catch (error) {
//             throw error;
//         }
//     }

//     async login({email, password}) {
//         try {
//             return await this.account.createEmailPasswordSession(email, password);
//         } catch (error) {
//             throw error;
//         }
//     }

//     async getCurrentUser() {
//         try {
//             return await this.account.get();
//         } catch (error) {
//             throw error;
//         }
//     }

//     async logout() {
//         try {
//             return await this.account.deleteSessions();//used to delete all the sessions of the user
//         } catch (error) {
//             throw error;
//         }
//     }
   
// }

// const authService=new AuthService();
// //here we are creating an instance of AuthService so that we can use it in our application and all the definitions are in the AuthService class

// export default authService;
import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService

