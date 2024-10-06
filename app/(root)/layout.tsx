/* Removed Imports */

/* Removed Metadata & Fonts After Copying Layout.tsx From original app - Not Necessary for Layout */

/* This will allow me to use Inter and IBM_Plex_Serif Throughout The Entire Application */
/* Remove HTML, Replace with semantic body tag */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        SIDEBAR
        {children}
    </main> 
  );
}
