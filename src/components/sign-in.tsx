import { signInWithGithub } from "@/app/actions/signin";

export default function SignIn() {
  return (
    <form
      action={()=> signInWithGithub()}
    >
      <button type="submit">Login</button>
    </form>
  )
} 