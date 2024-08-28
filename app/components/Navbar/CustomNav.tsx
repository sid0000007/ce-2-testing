"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import "./CustomNav.css";
export function FloatingNavbar() {
  const navItems = [
    {
      image: <img src="/whitelogo.svg" height={40} width={40} />,
      link: "/",
    },
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "CAREERS",
      link: "/careers",
    },

    {
      name: "CONTACT US",
      link: "/contact-us",
    },
  ];
  return <FloatingNav navItems={navItems} />;
}
