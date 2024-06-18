import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset overflow-hidden">
        <div>
          <Image
            src="/icons/horizon-screenshot.png"
            alt="Auth image"
            width={1500}
            height={1500}
            className="ml-[10vw] rounded-l-xl object-contain border-blue-950 border-4"
          />
        </div>
      </div>
    </main>
  );
}
