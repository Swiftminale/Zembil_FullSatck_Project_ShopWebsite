"use client";
import { CircleUserRound, Menu, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/favicon.jpeg";
import { UserButton, useUser } from "@clerk/nextjs";
import { useState } from "react";
import useCart from "@/lib/hooks/useCart";
const NavBar = () => {
  const { user } = useUser();
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const cart = useCart();
  return (
    <div className="sticky top-0 z-10 py-2 px-10 flex justify-between items-center bg-white">
      <Link href="/">
        <Image
          src={logo}
          alt="Logo"
          width={50}
          height={100}
          className="rounded-full"
        />
      </Link>
      <div>
        <Link href="/"> Home</Link>
      </div>

      <div className="relative flex items-center gap-3">
        <Link
          href="/cart"
          className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white"
        >
          <ShoppingCart />{" "}
          <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
        </Link>

        {user && (
          <Menu
            className="cursor-pointer"
            onClick={() => setDropdownMenu(!dropdownMenu)}
          />
        )}
        {user && dropdownMenu && (
          <div className="absolute flex flex-col gap-2 top-10 right-5 p-3 rounded-lg boarder bg-white text-base-bold">
            <Link href="/wishlist" className="hover:text-blue-600">
              Wishlist
            </Link>
            <Link href="/orders" className="hover:text-blue-600">
              Orders
            </Link>
          </div>
        )}

        {user ? (
          <UserButton afterSignOutUrl="/sign-in" />
        ) : (
          <Link href="/sign-in">
            <CircleUserRound />
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
