import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400","500","600", "700","800"], // Specify the weights you need
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata = {
  title: "Abdou Portfolio",
  description: "Abdou Developer Portfolio to show my work created with next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {children}
        
      </body>
      
    </html>
  );
}
