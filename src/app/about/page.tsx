export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col justify-center items-center px-16 py-6">
        <div className="w-full max-w-5xl">
          <div className="text-4xl font-bold uppercase bg-gradient-to-r from-[#616758] to-[#99a693] bg-clip-text text-transparent">
            About Me
          </div>

          <div className="py-4">
            I&#39;m Krisette. I specialize in front-end development, using
            TypeScript & JavaScript to create clean and user-friendly
            interfaces. While my heart lies at the front, I&#39;m no stranger to
            the back-end with hands-on experience in Node/Express and SQL/NoSQL
            databases. Growing up in the early days of the internet, I was the
            kid crafting &#34;pet pages&#34; for my Neopets, diving headfirst
            into HTML & CSS. This passion only deepened as I transitioned to
            personal blogging in high school (RIP, mocha-latte.org). And
            although a chapter of my life saw me in the role of a Registered
            Nurse, my intrinsic draw to tech led me back to the world of coding.
          </div>
          <div className="relative inline-block mt-3">
            <span className="absolute inset-x-0 bottom-0 h-[4px] bg-[#63685a] block transform -translate-y-[2px] z-0"></span>
            <span className="relative text-xl font-bold z-10 uppercase">
              🖥️ Current Quest
            </span>
          </div>
          <div>
            Diving deep into front end development at{" "}
            <a
              href="https://www.fusionmarketplace.com"
              className="hover-underline-animation font-semibold"
            >
              Fusion Marketplace
            </a>
            , a health care staffing recruitment platform, and extending the
            traveler experience with our iOS and Android app
          </div>
          <div className="relative inline-block mt-3">
            <span className="absolute inset-x-0 bottom-0 h-[4px] bg-[#63685a] block transform -translate-y-[2px] z-0"></span>
            <span className="relative text-xl font-bold z-10 uppercase">
              🎮 WHEN I&#39;M NOT CODING...
            </span>
          </div>
          <div>
            Catch me playing video games like Baldur&#39;s Gate 3 and Stardew
            Valley, watching anime/TV/movies, traveling, and trying new
            restaurants
          </div>

          <div className="text-4xl font-bold mt-12 uppercase bg-gradient-to-r from-[#616758] to-[#99a693] bg-clip-text text-transparent">
            SKILLS
          </div>
          <p className="text-white mb-5 text-justify">
            Here are some of the technologies I’ve been working with recently:
          </p>
          <div className="flex flex-row flex-wrap justify-center">
            <div>
              <ul className="text-gray-50 mr-2">
                <li>✨ Node.js/Express</li>
                <li>✨ GraphQL</li>
                <li>✨ TypeScript</li>
                <li>✨ JavaScript (ES6+)</li>
                <li>✨ React (Hooks/Router)</li>
              </ul>
            </div>
            <div>
              <ul className="text-gray-50">
                <li>✨ Redux</li>
                <li>✨ NoSQL databases</li>
                <li>✨ SQL databases</li>
                <li>✨ TailwindCSS</li>
                <li>✨ Docker</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
