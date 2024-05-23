import { Poppins } from "next/font/google";
import { Gochi_Hand } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";

const poppins = Poppins({ 
  variable: '--font-poppins',
  subsets: ["latin"],
  weight: ['100', '300', '500', '700', '900']
});

const gochi = Gochi_Hand({ 
  variable: '--font-giveYourGlory',
  subsets: ["latin"],
  weight: ['400']
});

export const metadata = {
  title: "Borcelle Açaí Delivery",
  description: "Revitalize seu paladar com Borcelle",
  favicon: "/images/favicon.svg",
  contentType: "website",
  language: "pt-BR",
  author: "Maicon Rodrigues",
  keywords: "açaí, delivery, loja de açaí, Borcelle, sorvete, comida saudável",
  canonicalUrl: "",
  charset: "UTF-8"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body>
      <Header />
      {children}
      </body> 
    </html>
  );
}
