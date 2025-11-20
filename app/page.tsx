import Logo from "@/components/logo";
import Wrapper from "@/components/wrapper";

export default function Home() {
    return (
      <div
        className="w-full h-screen"
        style={{
          background: "linear-gradient(to top, white 50%, #cdeffcff 50%, #d6e0e7ff 100%)",
        }}
      >
        <Logo/>
        <div className="flex flex-col items-center justify-center mt-10 text-center gap-4">
          <div className="text-2xl md:text-3xl font-semibold font-nunito">
            Travel Smarter, Not Harder
          </div>
          <div className="text-base md:text-xl font-nunito max-w-xl md:max-w-3xl text-[#767689]">
            Make every trip effortless. Tripzy lets you book rides and plan journeys for ease
          </div>
        </div>
        <Wrapper/>
      </div>
    );
}
