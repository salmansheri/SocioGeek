import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import PostFormCard from "@/components/PostFormCard";

import PostCard from "@/components/PostCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sociogeeks</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/logoblack.png" />
      </Head>
      <PostFormCard />

      <PostCard />
    </>
  );
}
