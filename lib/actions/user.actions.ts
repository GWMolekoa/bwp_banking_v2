'use server'

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

// Process will be similar to Sign-Up function, Except we create an email and password session.
export const signIn = async ({email, password}: signInProps) => {
    try {
        // Mutation / Database / Make a Fetch
        const { account } = await createAdminClient();

        const response = await account.createEmailPasswordSession(email, password);

        return parseStringify(response);
    } catch (error) {
        console.error('Error', error);
    }
}

export const signUp = async (userData: SignUpParams) => {
    // Insert Destructuring Syntax
    const {email, password, firstName, lastName } = userData;

    try {
        // Mutation / Database / Make a Fetch - Use Appwrite to Create A User Account
        const { account } = await createAdminClient();

        const newUserAccount = await account.create(
            ID.unique(), 
            email, 
            password, 
            `${firstName} ${lastName}`
        );

        // Creating a session
        const session = await account.createEmailPasswordSession(email, password);

        cookies().set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });

        // NextJs prohobits passing large objects(such as user objects) through server actions. So we parseStringify.
        return parseStringify(newUserAccount);

    } catch (error) {
        console.error('Error', error);
    }
}

// Utility function to get the logged in user from Appwrite. This function will be used in our components and routes to check if a user is logged in, and access the user's details.
export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      
      const user = await account.get();

      return parseStringify(user);
    } catch (error) {
      return null;
    }
}

// Implement logout function.
export const logoutAccount = async () => {
    try {
        const { account } = await createSessionClient();

        cookies().delete('appwrite-session');

        await account.deleteSession('current');
    } catch (error) {
        return null;
        
    }
}