import { JetBrains_Mono } from "next/font/google";
import { HomPage } from "@/components";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono"
});

export default function Home() {
  return (
    <main className={`font-satoshi ${jetbrainsMono.variable}`}>
      <HomPage />
    </main>
  );
}
