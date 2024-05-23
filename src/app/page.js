import { About } from "./components/about";
import { ButtonCartFooter } from "./components/buttonCartFooter";
import { Footer } from "./components/footer";
import { Menu } from "./components/menu";
import { HeroSection } from "./components/pages/home/heroSection";
import { CartProvider } from "./components/cartContext";
import { BackToTop } from "./components/backToTop";
import { metadata } from "./layout";

export default function Home() {
  return (
    <CartProvider>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <link rel="icon" href={metadata.favicon} />
      <meta property="og:type" content={metadata.contentType} />
      <meta property="og:locale" content={metadata.language} />
      <meta name="author" content={metadata.author} />
      <meta name="keywords" content={metadata.keywords} />
      <link rel="canonical" href={metadata.canonicalUrl} />
      <meta charset={metadata.charset} />
      <meta property="og:image" content="/images/logoCardapio.png"/>
      <HeroSection />
      <Menu />
      <About />
      <Footer />
      <ButtonCartFooter />
      <BackToTop />
    </CartProvider>
  );
}
