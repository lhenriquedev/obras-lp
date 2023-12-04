import { AlignRight } from "lucide-react";
import Logo from "./logo";

interface HeaderProps {}
export function Header(props: HeaderProps) {
  return (
    <header className="px-4 py-8 bg-gradient-to-r from-primary-800 to-primary-900">
      <div className="max-w-7xl flex items-center justify-between mx-auto w-full">
        <div className="flex items-center gap-14">
          <Logo className="h-12" />
          <ul className="hidden md:flex items-center gap-10">
            <li className="text-lg font-semibold text-slate-50">Home</li>
            <li className="text-lg font-semibold text-slate-50">Sobre</li>
            <li className="text-lg font-semibold text-slate-50">Faq</li>
            <li className="text-lg font-semibold text-slate-50">Contact</li>
          </ul>
        </div>
        <button className="block md:hidden">
          <AlignRight className="h-10 w-10 text-white" />
        </button>
        <button className="bg-primary-600 hidden md:block md:w-44 text-slate-50 self-start rounded-md px-4 py-4 hover:bg-primary-700 transition-all active:scale-95">
          Download &rarr;
        </button>
      </div>
    </header>
  );
}
