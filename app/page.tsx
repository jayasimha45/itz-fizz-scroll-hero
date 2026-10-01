import { HeroSection } from "@/components/HeroSection";
import { SiteFooter } from "@/components/SiteFooter";
import { StorySection } from "@/components/StorySection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StorySection />
      <SiteFooter />
    </main>
  );
}
