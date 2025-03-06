import Contact from "@/components/Contact";
import Countdown from "@/components/Countdown";
import Logo from "@/components/Logo";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <main className="min-h-screen flex flex-col items-center py-8 px-3 gap-16 ">
      <Logo />
      <section className="text-white flex flex-col items-center justify-center max-w-6xl md:max-w-5xl relative gap-6">
        <h1 className="text-xl md:text-4xl lg:text-5xl font-bold tracking-wide">
          Our Website Is Almost Ready.
        </h1>

        <p className="md:max-w-4xl max-w-2xl md:text-xl text-center text-xs">
          &quot;<span>SELMCORP</span>: Powering the Future of Tech.&quot; Get
          ready to explore a world of innovation, where cutting-edge AI,
          automation, web, app and mobile development, and design come together
          to transform your digital experience. Stay tuned as we fine-tune the
          details and prepare to launch a platform built for the future.
        </p>
      </section>
      <Countdown />
      <Contact />
    </main>
  );
}

const HomePage = async () => {
  const queryClient = new QueryClient();
  const data = await getData();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>{data}</HydrationBoundary>
  );
};

export default HomePage;
