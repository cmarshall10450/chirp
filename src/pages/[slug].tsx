import { type NextPage } from "next";
import Head from "next/head";
import { LoadingPage } from "~/components/LoadingSpinner";

import { api } from "~/utils/api";

const ProfilePage: NextPage = () => {
  const { data: user, isLoading } = api.profile.getUserByUsername.useQuery({
    username: "cmarshall10450",
  });

  if (isLoading) {
    return <LoadingPage size="lg" />;
  }

  if (!user) {
    return (
      <>
        <Head>
          <title>Profile</title>
        </Head>
        <main className="flex h-screen justify-center">
          <div>404</div>
        </main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <main className="flex h-screen justify-center">
        <div>Profile View</div>
      </main>
    </>
  );
};

export default ProfilePage;
