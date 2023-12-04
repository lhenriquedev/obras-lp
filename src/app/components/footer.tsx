import { Facebook, Instagram } from "lucide-react";

import Logo from "./logo";

interface FooterProps {}
export function Footer(props: FooterProps) {
  return (
    <footer className="bg-primary-800">
      <div className="max-w-7xl mx-auto py-12 px-2">
        <div className="text-white flex flex-col items-center md:items-start">
          <div className="space-y-2 mb-4">
            <Logo className="h-12 mb-6" />
            <h2 className="text-sm">obras@itapema.com</h2>
            <p className="text-sm">+55 123123323</p>
          </div>

          <div className="flex gap-2 items-center">
            <Instagram />
            <Facebook />
          </div>
        </div>
        <div></div>
      </div>
    </footer>
  );
}
