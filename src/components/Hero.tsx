import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Optional background image */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://dl.dropboxusercontent.com/scl/fi/unnr3stqgwqybrhu063da/ChatGPT-Image-Jun-25-2025-11_59_39-PM.png?rlkey=1cfw6j2vaau55p4rsf3q35s6x&st=3ynjd7jb")',
        }}
      ></div> */}

      {/* Darker gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-emerald-900/90 to-black"></div>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight animate-slide-up">
          Elevate Your
          <span className="block bg-gradient-to-r from-light-green to-emerald-400 bg-clip-text text-transparent">
            Brand
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up font-light">
          We create high-converting ad campaigns, branded content, and strategic
          media that drive customer engagement and generate consistent revenue
          for your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-9 justify-center items-center animate-slide-up">
          {/* CTA Button */}
          <a
            href="#contact"
            className="group bg-light-green hover:bg-dark-green text-white px-14 py-6 rounded-full font-semibold text-3xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-light-green/25 flex items-center space-x-4"
          >
            <span>FREE Ad</span>
            <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          {/* Watch Reel Button */}
          <a
            href="https://www.instagram.com/p/DJygHgINNeD/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-4 text-white hover:text-light-green transition-all duration-300"
          >
            <div className="relative bg-white/20 backdrop-blur-sm p-4 rounded-full group-hover:bg-light-green group-hover:scale-110 transition-all duration-500 border border-white/30">
              <div className="absolute inset-0 rounded-full bg-white/20 animate-ping z-0"></div>
              <Play className="h-6 w-6 ml-1 relative z-10" />
            </div>
            <span className="font-medium text-3xl">Watch Our Reel</span>
          </a>
        </div>

        {/* Placeholder grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
          {/* Cards or blocks can go here */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
