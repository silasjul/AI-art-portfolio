import { caviat } from "@/app/meta";

export default function NavBar() {
  return (
    <nav className="absolute top-5 flex items-center w-full py-2 px-10 text-white underline-offset-4 z-[300]">
      <a className={caviat.className + " text-3xl mr-auto"} href="#">
        Ascend
      </a>
      <div className="flex items-center a:text-lg gap-28">
        <a className="nav" href="#">
          My Work
        </a>
        <a className="nav" href="#">
          Services
        </a>
        <a
          className="bg-gradient-to-r from-[#6FFF95] to-[#7AFFF4] text-transparent bg-clip-text font-medium underline nav"
          href="#"
        >
          Contact me
        </a>
      </div>
    </nav>
  );
}
