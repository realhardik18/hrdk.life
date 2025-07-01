import Links from "./components/links";
export default function Home() {
  return (
    <div className="min-h-screen bg-black font-[var(--font-poppins)]">
      <div className="px-4 sm:pl-5 pt-5">
        <div className="text-3xl sm:text-6xl">yo i&apos;m hrdk</div>
        <Links/>   
        <div className="pt-6 sm:pt-6 text-sm sm:text-xl leading-relaxed max-w-2xl">
            <p>i&apos;m a 19 y/o builder actively shipping and learning</p>
            <p>building projects in ai/ml, full-stack, & automation</p>
            <p>trying to write code that pays rent (eventually)</p>
            <p>running <a href="/" target="_blank" className="underline text-purple-500">grindset.club</a> & babysitting <a href="/" target="_blank" className="underline text-blue-500">mykozu.xyz</a> rn</p>
        </div>              
        <div className="pt-6 sm:pt-6 text-sm sm:text-xl leading-relaxed max-w-2xl">
          <p>freelanced on 20+ tech gigs and builds</p>
          <p>won 5 hackathons solving real dev problems</p>
          <p>prev AI/ML intern, worked at getblue.ai</p>
          <p>check out some of my projects <a href="/" target="_blank" className="underline">here</a></p>
        </div>
        <div className="pt-6 sm:pt-6 text-sm sm:text-xl leading-relaxed max-w-2xl">
          <p>i love to hit the gym and play sports</p>          
          <p>open for gigs and internships</p>
          <p><a href="https://www.timeanddate.com/worldclock/india/bengaluru" target="_blank" className="underline">based in blr</a> | <a href="/" target="_blank" className="underline">get in touch</a></p>
        </div>           
      </div>
    </div>
  );
}
