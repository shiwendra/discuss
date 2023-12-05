import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
export default async function Home() {
  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">Sign In</Button>
      </form>
      <form action={actions.signOut}>
        <Button type="submit">Sign out</Button>
      </form>
    </div>
  );
}
