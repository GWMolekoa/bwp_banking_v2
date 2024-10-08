/* Removed Imports */

import MobileNav from "@/components/MobileNav";
import SideBar from "@/components/SideBar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";


/* Removed Metadata & Fonts After Copying Layout.tsx From original app - Not Necessary for Layout */

/* This will allow me to use Inter and IBM_Plex_Serif Throughout The Entire Application */
/* Remove HTML, Replace with semantic body tag */
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // We need to have knowledge of our current user (Modified from hardcoded 1st and last name)
  
  
  const loggedIn = await getLoggedInUser();

  if(!loggedIn) redirect('/sign-in')

  return (
    <main className="flex h-screen w-full font-inter">
        <SideBar 
          user={loggedIn}
       />

       <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image 
              src="/icons/logo.svg"
              width={30}
              height={30}
              alt="logo"/>

              <div>
                <MobileNav 
                  user={loggedIn}
                />
              </div>
          </div>
          {children}
       </div>

    </main> 
  );
}
