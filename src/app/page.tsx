import { Banner } from "@/components/banner";
import { Business } from "@/components/business";
import { Marketing } from "@/components/marketing";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col gap-10">
      <Banner />
      <Marketing />
      <Business />
    </main>
  );
}
