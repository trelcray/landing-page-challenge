import { Banner } from "@/components/banner";
import { Business } from "@/components/business";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col gap-6">
      <Banner />
      <Business />
    </main>
  );
}
