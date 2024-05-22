import { About } from "./components/about";
import { ButtonCartFooter } from "./components/buttonCartFooter";
import { Footer } from "./components/footer";
import { Menu } from "./components/menu";
import { ModalCart } from "./components/modalCart";
import { HeroSection } from "./components/pages/home/heroSection";

export default function Home() {
  return (
    <body>
      <HeroSection />
      <Menu />
      <About />
      <Footer />
      <ButtonCartFooter />
    </body>
  );
}
