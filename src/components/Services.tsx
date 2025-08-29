import { Check, CheckCircle2, Megaphone, Video } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Video,
      title: "Promo Package - R17,999/month",
      description: "",
      features: [
        "8 Custom Videos (blend of organic & ad-focused content)",
        "12 High-Quality Stills",
        "Full Social Media Management",
        "4 Paid Ad Campaigns (setup & optimization)",
        "Monthly Performance Reporting",
      ],
      price: "",
      popular: false,

      bonusOffer: {
        name: "Bonus Offer - Limited Promo (Aug-Sep Only)",
        price: "R49,999 Once-Off",
        details: [
          "Secure a 3-Month Retainer",
          "Pay once-off: R49,999 (Save R4,000)",
          "Includes everything from the Promo Package",
          "FREE Lead-Optimised Website (Valued at R20,000+)",
        ],
      },

      valueDeal: {
        name: "Lead-Optimised Website",
        value: "Valued at R20,000+",
        included: true,
        notes: "Only available with Bonus Offer",
      },
    },
    {
      icon: Megaphone,
      title: "Conversion  Focus Package -R24,999/month ",
      description: "",
      features: [
        "10 Engaging Organic Reels",
        "4 High-Impact Video Ads (ad-optimized)",
        "20 Professionally Branded Stills",
        "Full Social Media Management (Instagram, Facebook, TikTok)",
        "4 Targeted Meta Ad Campaigns (cold, warm & retargeting)",
        "Weekly Performance Reports & Continuous Ad Optimisation",
      ],
      price: "",
      popular: true,

      bonusOffer: {
        name: "3-Month Retainer Bonus",
        price: "R67,999 once-off (Save R7,000)",
        details: [
          "All fresh content will be uploaded and maintained on your new website for 3 months at no extra cost.",
          "R67,999 once-off (Save R7,000)","High-Converting Lead-Focused Website (valued at R20,000)",
        ],
      },
      valueDeal: {
        name: "",
        value: "",
        included: false,
        notes: "",
      },
    },
     {
      icon: Megaphone,
      title: "WEBSITE + startup marketing -R29,999/month ",
      description: "",
      features: [
        "10 Engaging Organic Reels",
        "4 High-Impact Video Ads (ad-optimized)",
        "20 Professionally Branded Stills",
        "Full Social Media Management (Instagram, Facebook, TikTok)",
        "4 Targeted Meta Ad Campaigns (cold, warm & retargeting)",
        "Weekly Performance Reports & Continuous Ad Optimisation",
        "All fresh content will be uploaded and maintained on your new website for 3 months at no extra cost",
      ],
      price: "",
      popular: true,

      bonusOffer: {
        name: "",
        price: "",
        details: [
        ],
      },
      valueDeal: {
        name: "",
        value: "",
        included: false,
        notes: "",
      },
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <div className="mb-6">
            <span className="inline-block bg-light-green/10 text-light-green px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-8 leading-tight">
            Comprehensive Creative
            <span className="block text-light-green">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From concept to execution, we provide end-to-end creative services
            that elevate your brand and drive meaningful engagement with your
            audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up border border-gray-100 hover:border-light-green/20 ${
                service.popular ? "ring-2 ring-light-green ring-opacity-50" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-light-green to-emerald-400 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="bg-light-green/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-light-green/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-light-green" />
                </div>

                <h3 className="text-2xl font-bold text-text-dark mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {/* Standard Features */}
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={`feature-${featureIndex}`}
                      className="flex items-center text-gray-600"
                    >
                      <Check className="h-5 w-5 text-light-green mr-3 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}

                  {/* Bonus Offer Section */}
                  {service.bonusOffer && (
                    <li className="pt-4">
                      <h4 className="text-lg font-bold text-light-green mb-2">
                        {service.bonusOffer.name}
                      </h4>
                      <ul className="space-y-2">
                        {service.bonusOffer.details.map((detail, idx) => (
                          <li
                            key={`bonus-${idx}`}
                            className="flex items-start text-gray-600"
                          >
                            <CheckCircle2 className="h-5 w-5 text-light-green mr-3 flex-shrink-0 mt-1" />
                            <span className="font-medium">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  )}

                  {/* Value Deal Section */}
                  {service.valueDeal?.included && (
                    <li className="pt-4">
                      <h4 className="text-sm font-semibold text-emerald-600">
                        {service.valueDeal.name} – {service.valueDeal.value}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">
                        {service.valueDeal.notes}
                      </p>
                    </li>
                  )}
                </ul>

                <div className="border-t border-gray-100 pt-6">
                  <div className="text-3xl font-bold text-text-dark mb-6">
                    {service.price}
                  </div>
                  <a
                    href="#form"
                    className="w-full bg-light-green hover:bg-dark-green text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-light-green to-emerald-400 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Custom Solution?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Every brand is unique. Let's discuss how we can create a tailored
              approach that perfectly fits your specific needs and objectives.
            </p>
            <a
              href="#form"
              className="block w-full lg:inline-block lg:w-auto bg-white text-light-green hover:bg-gray-50 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
