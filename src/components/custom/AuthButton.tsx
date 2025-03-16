import React from 'react'
import { Button } from '../ui/button';
import { signOutFromEverywhere } from '@/app/actions/signout';
import { signInWithGithub } from '@/app/actions/signin';
import { auth } from '@/auth';

export default async function AuthButton() {
    const session = await auth();
  return (
    <div>
        {session?.user ? (
            <Button onClick={signOutFromEverywhere}>Sign Out</Button>
        ) : (
            <Button onClick={signInWithGithub}>Sign In</Button>
        )}

    </div>
  )
}
