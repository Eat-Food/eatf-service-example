import { currentUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between lg:flex">
        <h1 className="fixed left-0 top-0 flex w-full justify-center  text-lg pb-6 pt-8  lg:static lg:w-auto   lg:p-4 lg:dark:bg-zinc-800/30">
          EATF Service
        </h1>
        <div className="text-sm">
          {user?.lastName}
          {user?.firstName}({user?.emailAddresses[0].emailAddress})
        </div>
      </div>
    </main>
  );
}
