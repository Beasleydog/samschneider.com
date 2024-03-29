import { Raleway } from "next/font/google";
import Header from "./header";
import "./globalStyles.css";
const inter = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Sam Schneider",
  description: "Sam's Stuff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body >
    </html >
  );
}
