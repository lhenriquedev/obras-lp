import { AlignRight } from "lucide-react";
import Logo from "./logo";

interface HeaderProps {}
export function Header(props: HeaderProps) {
  return (
    <header className="border-b  border-zinc-800 px-4 py-8">
      <div className="max-w-7xl flex items-center justify-between mx-auto w-full">
        <div className="flex items-center gap-14">
          <Logo className="h-12" />
          <ul className="flex items-center gap-10">
            <li className="text-lg">Home</li>
            <li className="text-lg">Sobre</li>
            <li className="text-lg">Faq</li>
            <li className="text-lg">Contact</li>
          </ul>
        </div>
        <button className="hidden">
          <AlignRight className="h-10 w-10" />
        </button>
        <button className="bg-primary-900 md:w-44 self-start rounded-md px-4 py-4 hover:bg-primary-800 transition-all active:scale-95">
          Download &rarr;
        </button>
      </div>
    </header>
  );
}
