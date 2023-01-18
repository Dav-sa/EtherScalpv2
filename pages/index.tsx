import { Footer } from "@/components/home/Footer";
import Layout from "@/components/layout";
import { LatestBlock } from "@/components/home/LatestBlock";
import { Hero } from "@/components/home/Hero";

export default function Home() {
  return (
    <Layout>
     <Hero/>
      <LatestBlock title={"Latest Block"} description={"Latest Block mined on Goerli"} demo={<div>demo latest block</div>} large={true}></LatestBlock>
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0"></div>
      <Footer />
    </Layout>
  );
}
