'use server';
import { signOut } from "../../auth";

export async function signOutFromEverywhere() {
    
        await signOut() 
}