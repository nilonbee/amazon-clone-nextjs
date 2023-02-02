import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import Link from "next/link";
import { selectItems } from "../slices/basketSlice";

const Header = () => {
  const [session] = useSession();
  const items = useSelector(selectItems);

  console.log(session, "session");

  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        {/* Logo */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Link href='/'>
            <Image
              src="https://links.papareact.com/f90"
              width={150}
              height={40}
              objectFit="contain"
              className="cursor-pointer"
            />
          </Link>
        </div>
        {/* search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 border border-white border-2">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* right */}
        <div className="flex text-white text-xs items-center space-x-6 mx-6 whitespace-nowrap">
          <div onClick={!session ? signIn : signOut} className="link">
            <p>{session ? `Hello ${session.user.name}` : "Sign in"}</p>
            <p className="font-bold md:text-sm">account & lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-bold md:text-sm">& orders</p>
          </div>
          <Link href="/checkout">
            <div className="text-yellow-300 link flex items-center relative">
              <span className="absolute top-0 right-0 md:right-10 text-center w-4 h-4 rounded-full bg-yellow-500 text-black font-bold">
                {items?.length}
              </span>
              <ShoppingCartIcon className="text-white h-10" />
              <p className="font-bold md:text-sm hidden md:inline">Basket</p>
            </div>
          </Link>
        </div>
      </div>
      {/* bottom-nav */}
      <div className="space-x-3 flex items center bg-amazon_blue-light text-white text-sm p-2 pl-6">
        <p className="link  flex items-center">
          <MenuIcon className="h-6 mr-1" />
        </p>
        <p className="link">All</p>
        <p className="link">Prime-Vedio</p>
        <p className="link">Links</p>
        <p className="link  hidden lg:flex">Electronics </p>
        <p className="link  hidden lg:flex">Food & Grocery</p>
        <p className="link  hidden lg:flex">Health & Care</p>
        <p className="link  hidden lg:flex">Personal care</p>
        <p className="link  hidden lg:flex">Buy agian</p>
      </div>
    </header>
  );
};

export default Header;
