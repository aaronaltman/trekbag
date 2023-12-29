import ContentCard from "@/components/ContentCard";
import MainHeading from "@/components/MainHeading";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center mt-20">
      <MainHeading />
      <ContentCard />
    </main>
  );
}
