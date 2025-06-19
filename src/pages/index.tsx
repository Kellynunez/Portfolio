import { Inconsolata } from "next/font/google";
import { HomPage } from "@/components";

const inconsolata = Inconsolata({ 
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inconsolata"
});

export default function Home() {
  return (
    <main className={`font-satoshi ${inconsolata.variable}`}>
      <HomPage />
    </main>
  );
}
