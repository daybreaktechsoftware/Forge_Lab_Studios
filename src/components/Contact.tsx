import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      timeline: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const services = [
    "Videography",
    "Creative Marketing",
    "Advertisements",
    "Account Management",
    "Content Creation",
    "Photography",
    "Full Service Package",
  ];

  const budgetRanges = [
    "R5,000 - R10,000",
    "R10,000 - R25,000",
    "R25,000 - R50,000",
    "R50,000 - R100,000",
    "R100,000+",
    "Let's Discuss",
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <div className="mb-6">
            <span className="inline-block bg-light-green/10 text-light-green px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
              Let's Connect
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-8 leading-tight">
            Lets Increase Revenue
            {/* <span className="block text-light-green">Your Brand?</span> */}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Let's discuss your vision and create something extraordinary
            together. Our team is ready to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2 animate-slide-in-left">
            <div className="bg-gradient-to-br from-dark-grey to-dark-green rounded-3xl p-8 lg:p-12 text-white h-full">
              <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>

              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="bg-light-green/20 p-3 rounded-2xl">
                    <Phone className="h-6 w-6 text-light-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Phone</h4>
                    <p className="text-gray-300">078 258 6687</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Mon-Fri 9AM-6PM EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-light-green/20 p-3 rounded-2xl">
                    <Mail className="h-6 w-6 text-light-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <p className="text-gray-300">Forgelabstudio25@gmail.com</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Your query will be responded to
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-light-green/20 p-3 rounded-2xl">
                    <MapPin className="h-6 w-6 text-light-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Location</h4>
                    <p className="text-gray-300">Cape Town, South Africa</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Serving clients worldwide
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-start space-x-4">
                  <div className="bg-light-green/20 p-3 rounded-2xl">
                    <Calendar className="h-6 w-6 text-light-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      Schedule a Call
                    </h4>
                    <p className="text-gray-300">Book a free consultation</p>
                    <button className="text-light-green hover:text-emerald-400 transition-colors mt-2 font-medium">
                      View Calendar →
                    </button>
                  </div>
                </div> */}
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-6">
                  Follow Our Journey
                </h4>
                <div className="flex space-x-4">
                  <a
                    target="blank"
                    href="https://www.instagram.com/forgelabstudio/"
                    className="bg-light-green/20 p-3 rounded-2xl hover:bg-light-green hover:scale-110 transition-all duration-300 text-light-green hover:text-white"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 animate-slide-in-right">
            {/* Airtable Form Embed */}
            <div className="text-center">
              <iframe
                className="airtable-embed"
                src="https://airtable.com/embed/appQZKiVvPq9mDHuv/pagwOIThjk6cTFSYX/form"
                frameBorder="0"
                width="100%"
                height="733"
                style={{
                  background: "transparent",
                  border: "1px solid #ccc",
                  borderRadius: 22,
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
