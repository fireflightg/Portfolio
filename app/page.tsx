'use client';
import Image from "next/image";
import { ThemeToggle } from "./components/theme-toggle";
import { siteConfig} from "./components/config/site-config";
import { Mail, MapPin } from "lucide-react";
import GridItem from "./components/grid-item";
import SocialBox from "./components/grid-items/social-box";
import MentorshipBox from "./components/mentorship-box";
import Project from "./components/projects";
import Equipments from "./components/equipment";
import Footer from "./components/footer";
import { useAnimate, stagger } from "framer-motion";
import { useEffect } from "react";

const staggerdelay = stagger(0.1);

// const GridItems = new Array(12).fill(0);
// const GridItems2 = [
//   {
//     className: "rounded-md bg-emerald-100 col-span-2 row-span-2"
//   },
//   {
//     className: "rounded-md bg-emerald-100 col-span-1 row-span-2"
//   },
//   {
//     className: "rounded-md bg-emerald-100 col-span-1 row-span-2"
//   },
//   {
//     className: "rounded-md bg-emerald-100 col-span-2 row-span-4"
//   },
//   {
//     className: "rounded-md bg-emerald-100 col-span-2 row-span-2"
//   },
//   {
//     className: "rounded-md bg-emerald-100 col-span-2 row-span-1"
//   },
//   {
//     className: "rounded-md bg-emerald-100 col-span-2 row-span-1"
//   },
//   {
//     className: "rounded-md bg-emerald-100 col-span-2 row-span-1"
//   },
//   {
//     className: "rounded-md bg-emerald-100 col-span-2 row-span-2"
//   },
//   {
//     className: "rounded-md bg-emerald-100 col-span-2 row-span-1"
//   },
// ]

export default function Home() {
  const [scope, animate] = useAnimate();
  useEffect(() =>{
if(scope.current){
  animate("div", {
    opacity: 1,
    y: 0,
    scale: 1,
  },
    {duration: 0.03,
      type:"spring",
  stiffness:  200,
damping: 35,
delay: staggerdelay,}
    )
}
  },[scope])
  return (
    <main className=" container flex flex-col xl:flex-row flex-1 w-full h-full gap-6 xl:gap-10 mx-auto ">
      {/* left side */}
      <div className="flex-1 xl:h-full w-full pt-8  xl:p-8 max-w-md ">
        <div className="rounded-md w-full h-full flex flex-col space-y-6">
          <Image className=" rounded-full" alt="avatar" src="/pp.jpg" width="120" height="120" loading="eager" priority/>
          
        <div>
        <div className="text-xl text-primary font-semibold ">{siteConfig.title}</div>
          <h1 className="text-4xl font-bold mt-2">{siteConfig.creator}</h1>
          <p className="text-2xl font-light text-neutral-500">{siteConfig.bio}</p>
        </div>
        <div className="flex items-center gap-6 justify-between ">

          <a className=" flex items-center border w-full gap-2 border-neutral-200 dark:border-neutral-800 py-2 px-3 rounded-md" href={siteConfig.locationLink}>
            <MapPin size="16"/>{siteConfig.location}</a>
          <a className=" flex items-center border w-full gap-2 border-neutral-200 dark:border-neutral-800 py-2 px-3 rounded-md" href={siteConfig.email}>
            <Mail size="16"/>Contact Me</a>
        </div>
        <div className="hidden xl:flex">
         <div className=" w-full border-t text-xs border-neutral-200 dark:border-neutral-800 pt-6 flex items-center justify-between">
          <div className="text-neutral-500"> Built by Saahib | @2024 oncite. All Rights Reserved </div>
          <ThemeToggle />
         </div>
        </div>
        </div>
      </div>
      {/* right side */}
      <div className="flex-1 md:h-full ">
        {/* Grid */}
        <div ref={scope} className="w-full md:h-full xl:overflow-y-auto p-6 grid grid-cols-2 md:grid-cols-4 auto-rows-[76px] gap-6 xl:gap-10">
          {siteConfig.items.map((item,index) => {
            return <GridItem key={item.title + index} size={item.layout}>
           {item.type ===  "social"  ?  (<SocialBox item={item}/> ): (item.type === 'music' ? (<MentorshipBox item={item}/>) :(item.type === "project" ? (<Project item = {item}/>) : item.type === "equipment" ? (
              <Equipments item={item} />
            ) : (
              <div>Need to create new component type.</div>
            )))}  
            </GridItem>
          })}
        </div>
        <div className="flex p-8 pb-10 w-full xl:hidden">
      <Footer/>
        </div>
      </div>
   
      
    </main>
  );
}
