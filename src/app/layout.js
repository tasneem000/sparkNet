import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Container } from "@mui/material";
import AnimatedCursor from "react-animated-cursor";

const poppins = Poppins({ subsets: ["latin"], display: 'swap', variable: '--font-poppins', weight: ['400'] });

export const metadata = {
  title: "Spark Net - Your Digital Solution Partner",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <AnimatedCursor
      innerSize={12}
      outerSize={8}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      />
      <Navbar/>
        <div className="min-h-screen p-0 m-0">{children}</div>
        <Footer/>
        </body>
    </html>
  );
}
