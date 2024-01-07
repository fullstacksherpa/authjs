"use server";

import {signOut} from "@/auth"

export const logout = async () =>{
    //by this method of signout we can pass some command before signing out in the server which will be seperate from js bundle
    await signOut();
}