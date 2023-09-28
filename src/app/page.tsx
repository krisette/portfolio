import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex-col">
      <div className="items-center">
      <div className="max-w-5xl w-full items-center font-mono text-3xl lg:flex">
        {`hi, i'm krisette`} ✨
        </div>
        <div className="max-w-5xl w-full lg:flex">software engineer</div>
        <div className="max-w-5xl w-full lg:flex">📍 los angeles, california</div>
 <div className="max-w-5xl w-full lg:flex">currently working on front end development at&nbsp;<a href="https://www.fusionmarketplace.com">fusion marketplace</a>, a health care staffing recruitment platform</div>
 </div>
 {/* <div  */}
 <div className="w-full">{`In my past life, I was a Registered Nurse, but the universe has a funny way of changing things up. When I'm not coding, I like playing video games like Baldur's Gate 3 and Stardew Valley, watching anime/TV/movies, traveling, and trying new restaurants.`}</div>

 <div>probably tech stack section</div>

    </main>
  )
}
