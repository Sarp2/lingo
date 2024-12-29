import { Button } from "@/components/ui/button";
import Image from "next/image";

const languages = [
  {
    name: "Croatian",
    img: "/hr.svg",
  },
  {
    name: "Spanish",
    img: "/es.svg",
  },
  {
    name: "French",
    img: "/fr.svg",
  },
  {
    name: "Italian",
    img: "/it.svg",
  },
  {
    name: "Japanese",
    img: "/jp.svg",
  },
];

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        {languages.map((language) => (
          <Button size="lg" variant="ghost" className="w-full" key={language.name}>
            <Image
              src={language.img}
              width={32}
              height={40}
              alt={language.name}
              className="mr-4 rounded-md"
            />
            {language.name}
          </Button>
        ))}
      </div>
    </footer>
  );
};
