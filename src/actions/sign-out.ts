'use server';
import * as auth from "@/auth";
export async function signOut() {
    auth.signOut();
}