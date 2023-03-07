import React from "react";
import Card from "@/components/Card";
import Avatar from "@/components/Avatar";
import Link from "next/link";
import PostCard from "@/components/PostCard";
import { useRouter } from 'next/router'; 

const profile = () => {
    const router = useRouter(); 
    const { pathname } = router; 
    console.log(pathname); 
    const activeElement = "flex gap-1 justify-center items-center border-b-4 border-socialBlue px-2 py-1 text-socialBlue bg-blue-400 bg-opacity-20 rounded-t-md"; 
    const nonActiveElement = "flex gap-1 justify-center items-center px-2 py-1";
    const isAbout = pathname.includes("about") 
    const isFriends = pathname.includes("friends")  
    const isPhoto = pathname.includes("photos")  
  return (
    <>
     <Card noPadding={true}>
      <div className="relative pb-0 overflow-hidden rounded-md">
        <div className="overflow-hidden flex justify-center items-center h-36">
          <img
            src="https://plus.unsplash.com/premium_photo-1661963559067-17346407c785?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="dubai"
          />
        </div>
        <div className="absolute top-16 left-4 m-10">
          <img
            className="rounded-full h-20 overflow-hidden w-20"
            src="/img/my_photo.jpg"
            alt="avatar"
          />
        </div>

        <div className="ml-36">
          <h1 className="font-bold text-xl">Salman Sheriff</h1>
          <div className="text-gray-500 leading-4">California, USA</div>
          <div>
            <p className="text-gray-500">sheriffsalman00@gmail.com</p>
          </div>
        </div>
        <div className="mt-5 pl-[40px] flex gap-5">
          <Link href="/profile" className={pathname === "/profile" ? activeElement : nonActiveElement}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
              />
            </svg>
            Posts
          </Link>
          <Link href="/profile/about" className={isAbout ? activeElement : nonActiveElement}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            About
          </Link>
          <Link href="/profile/friends" className={isFriends ?activeElement : nonActiveElement}>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>
            Friends
          </Link>
          <Link href="/profile/photos" className={isPhoto ? activeElement : nonActiveElement}>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            Photos
          </Link>
        </div>
      </div>
    </Card>
    <PostCard />

    </>
   
  );
};

export default profile;
