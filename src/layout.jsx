import { Outfit, Open_Sans} from "next/font/google";
import "./globals.css";


const OutfitSans = Outfit({
  variable: "--font-Outfit-sans",
  subsets: ["latin"],
});

const OpenSans = Open_Sans({
  variable: "--font-Open-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Onepage Website",
  description: "techtemmy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${OutfitSans.variable} ${OpenSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
