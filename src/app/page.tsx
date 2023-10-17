export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      <div className="flex-grow flex flex-col mt-4 lg:mt-4 justify-center items-center px-2 lg:px-16 min-h-screen">
        <div className="flex flex-col lg:flex-row w-full text-center lg:text-left flex-wrap justify-center items-center">
          <div className="flex-grow mb-4 lg:mb-0 lg:order-last">PICTURE</div>
          <div className="flex flex-col lg:pr-8 w-full lg:w-auto">
            <span className="text-2xl lg:ml-[2px]">Hello, my name is</span>
            <span className="text-4xl lg:text-6xl font-bold lg:-mt-2 uppercase bg-gradient-to-r from-[#616758] to-[#99a693] bg-clip-text text-transparent">
              Krisette Odegard
            </span>
            <span className="text-2xl lg:-mt-2 lg:ml-[2px] overflow-x-hidden">
              and I&#39;m a{" "}
              <div className="relative inline-block">
                <span className="absolute inset-x-0 bottom-0 h-[4px] bg-[#63685a] block transform -translate-y-[2px] z-0"></span>
                <span className="relative z-10 hover-underline-animation">
                  software engineer
                </span>
              </div>{" "}
              based in Los Angeles.
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
