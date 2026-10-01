import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Itz Fizz — Made for the feeling",
  description: "A little more fizz in every mile. Meet the Itz Fizz electric grand tourer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
