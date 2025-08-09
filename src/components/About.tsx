import { Award, Star, Target, TrendingUp, Users, Zap } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Zap, number: "50+", label: "Campaigns Launched" },
    { icon: Users, number: "50+", label: "Happy Clients" },
    { icon: Award, number: "40+", label: "Brands Collaborated With" },
    { icon: TrendingUp, number: "100%", label: "Average ROI Increase" },
  ];

  const values = [
    {
      icon: Target,
      title: "Strategic Vision",
      description:
        "Every campaign begins with deep market research and strategic planning to ensure maximum impact.",
    },
    {
      icon: Star,
      title: "Creative Excellence",
      description:
        "Our creative team pushes boundaries to deliver visually stunning and memorable content.",
    },
    {
      icon: TrendingUp,
      title: "Results Driven",
      description:
        "We measure success through tangible results and continuously optimize for better performance.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-slide-in-left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-light-green to-emerald-400 rounded-3xl blur-2xl opacity-20"></div>
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="Creative Team"
                className="relative w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <Zap className="h-10 w-10 text-light-green" />
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="mb-6">
              <span className="inline-block bg-light-green/10 text-light-green px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                About Forge Lab Studios
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-8 leading-tight">
              Crafting Digital
              <span className="block text-light-green">Masterpieces</span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We’re a premium creative marketing agency that helps great
              businesses get seen — and get results. While many brands have
              strong products or services, we specialize in getting them the
              attention, leads, and sales they deserve through
              performance-driven advertising and standout visual content.
            </p>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              At Forge Lab Studios, our strategists, creatives, and campaign
              managers collaborate to craft powerful digital media, from
              scroll-stopping video ads to high-converting social campaigns, all
              tailored to drive audience engagement, generate leads, and grow
              revenue.
            </p>

            {/* <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-light-green/20 hover:-translate-y-1">
                    <stat.icon className="h-8 w-8 text-light-green mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl font-bold text-text-dark mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>

        <div className="animate-fade-in">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
              Our Core Values
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every project we undertake and every
              relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-light-green/20 hover:-translate-y-2 h-full">
                  <div className="bg-light-green/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-light-green/20 transition-colors duration-300">
                    <value.icon className="h-8 w-8 text-light-green" />
                  </div>
                  <h4 className="text-xl font-bold text-text-dark mb-4">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
