import { auth } from "../auth"
 
export default async function Name() {
  const session = await auth()
 
  if (!session?.user) return null
 
  return (
    <div>
        <h1>{session.accessToken} and {session.internalJwt}</h1>
    </div>
  )
}