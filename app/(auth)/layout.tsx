/* Copied from (root/layout.tsx) and won't have SIDEBAR on it*/

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main>
          {children}
      </main> 
    );
  }
  