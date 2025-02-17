import Image from "next/image";
import "./page.css";
import Stairs from "@/components/ui/stairs";
import Preloader from "@/components/ui/preloader";
import NavBar from "@/components/ui/navBar";
import Title from "@/components/ui/title";
import ImageGallery from "@/components/ui/imageGallery";
import ContactBtn from "@/components/ui/contactBtn";
import { ReactLenis } from "lenis/react";
import About from "@/components/ui/about";

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <section className="hero w-full h-screen">
          <Preloader />
          <Image
            className="absolute left-1/2 translate-x-[-50%] top-0 z-[-5] pointer-events-none"
            src="/Ellipse.png"
            alt="blurCircle"
            width={1264}
            height={623}
          />
          <NavBar />
          <Title />

          <div className="w-[80rem] absolute top-52 z-[-10] translate-x-[-50%] left-1/2">
            <Stairs />
          </div>

          <ContactBtn />
        </section>

        <section className="Images">
          <About />
          <ImageGallery />
        </section>
      </ReactLenis>
    </>
  );
}
