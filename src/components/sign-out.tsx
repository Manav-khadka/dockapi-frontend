import { signOutFromEverywhere } from "@/app/actions/signout";

export default function SignOut() {
  return (
    <form
      action={()=> signOutFromEverywhere()}
    >
      <button type="submit">Sign Out</button>
    </form>
  )
} 