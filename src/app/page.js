import BlockchainRevolution from "@/components/BlockchainRevolution/BlockchainRevolution";
import Blx from "@/components/Blx/Blx";
import { Faqs } from "@/components/Faqs/Faqs";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import JoinWaitList from "@/components/JoinWaitList/JoinWaitList";
import Possibilities from "@/components/Possibilities/Possibilities";
import TrustedBy from "@/components/TrustedBy/TrustedBy";
import WhyBlenix from "@/components/WhyBlenix/WhyBlenix";
import Workflow from "@/components/Workflow/Workflow";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <TrustedBy /> */}
      <BlockchainRevolution />
      <WhyBlenix />
      <Possibilities />
      <Workflow />
      <Blx />
      <Faqs />
      <JoinWaitList />
    </>
  );
}
