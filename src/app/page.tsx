"use client";

import Link from "next/link";
import { SignInButton, useUser, SignOutButton } from '@clerk/nextjs'


import { LatestPost } from "t3stack/app/_components/post";
import { api, HydrateClient } from "t3stack/trpc/server";

export default function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  const user = useUser();

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        { !user.isSignedIn && <SignInButton /> }
        {!!user.isSignedIn && <SignOutButton />}
        {/* <SignIn /> */}
      </main>
    </HydrateClient>
  );
}
