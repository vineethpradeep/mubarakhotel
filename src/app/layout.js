import { Roboto, Roboto_Slab, Source_Serif_4 } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "swiper/css";
import "glightbox/dist/css/glightbox.min.css";
import "./globals.css";
import TemplateScripts from "@/components/utils/TemplateScripts";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ScrollTop from "@/components/scrollTop/ScrollTop";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
const robotoSlab = Roboto_Slab({ subsets: ["latin"], weight: ["400", "700"] });
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.className} ${robotoSlab.className} ${sourceSerif.className}`}
      >
        <Header />
        {children}
        <Footer />
        <ScrollTop />
        <TemplateScripts />
      </body>
    </html>
  );
}
