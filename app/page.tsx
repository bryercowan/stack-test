"use client";

import { Button } from "@/components/ui/button"
import Image from 'next/image';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { ShieldCheckIcon, FireIcon, ChartBarIcon, DocumentCheckIcon, CogIcon, UserGroupIcon } from "@heroicons/react/16/solid";
import {useRef, useState} from "react";
export default function StackTestGroup() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      console.log({response});

      if (response.status == 200) {
        setSubmitMessage('Message sent successfully, we will get back to you soon!');
        // Clear the form
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.log({error});
      setSubmitMessage('An error occurred. Please try again later.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  const services = [
  {
    name: "Compliance Testing",
    description: "We provide Air Compliance testing to ensure compliance with all environmental regulations and permit conditions.",
    icon: <ShieldCheckIcon className="w-16 h-16 mb-4 text-sky-600" />,
  },
  {
    name: "Combustion/Control Device Optimization",
    description: "We work with our clients to improve the performance of combustion systems, reduce emissions, and lower operating costs.",
    icon: <FireIcon className="w-16 h-16 mb-4 text-sky-600" />,
  },
  {
    name: "Emissions Studies and Specialized Testing",
    description: "We provide a wide range of advanced emissions studies with a high degree of accuracy and sensitivity, enabling critical process adjustments.",
    icon: <ChartBarIcon className="w-16 h-16 mb-4 text-sky-600" />,
  },
  {
    name: "Continuous Emission Monitoring System Certification",
    description: "We ensure your equipment is certified to measure emissions accurately and reliably using all EPA performance specifications.",
    icon: <DocumentCheckIcon className="w-16 h-16 mb-4 text-sky-600" />,
  },
  {
    name: "Destruction / Capture Efficiency Studies",
    description: "We evaluate processes to determine pollutant removal or destruction efficiency, including volatile organic compounds and hazardous air pollutants.",
    icon: <CogIcon className="w-16 h-16 mb-4 text-sky-600" />,
  },
  {
    name: "Expert Support",
    description: "Our experienced team provides guidance on local, state, and federal regulations, ensuring knowledgeable support for your projects.",
    icon: <UserGroupIcon className="w-16 h-16 mb-4 text-sky-600" />,
  },
];

  return (
      <div className="flex flex-col min-h-screen bg-sky-50">
        <header className="bg-sky-600 text-white"
                style={{
                  backgroundImage:
                      "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), " +
                      "linear-gradient(to right, rgba(28, 169, 232, .5) 30%, rgba(28, 169, 232, 0) 70%), " +
                      "url('/new_stack.png')",
                  backgroundSize: '100% 100%',
                  backgroundPosition: 'right center',
                  backgroundRepeat: 'no-repeat',
                  height: '50vh',
                }}>
          <div className="container w-screen max-w-full px-8 py-6 md:py-8">
            <nav className="flex justify-between items-center">
              <Image src="/stack-test-white.png" alt="Stack Test" width={100} height={120}/>
              <ul className="flex space-x-3 text-xl">
                <li><a href="#about" className="hover:underline">About</a></li>
                <li><a href="#services" className="hover:underline">Services</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="container mx-auto text-center relative z-10 mt-16 md:mt-24">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Air Compliance &amp; Emissions Solutions for a Better Tomorrow</h2>
            <p className="text-xl md:text-2xl">Ensuring compliance and optimizing performance for your business.</p>
          </div>
        </header>

        <main className="flex-grow">
          <section id="about" className="py-20 md:py-32">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-sky-800">About Stack Test Group</h2>
              <div className="text-center text-sky-700 text-lg md:text-xl">
                <p className="mb-6">
                  Stack Test Group is a leading providers of stack testing services for industrial facilities and has been in the business for over 30 years. We have a team of certified professionals that deliver accurate and reliable emissions testing to ensure your compliance with environmental regulations.
                </p>
                <p>
                 Our state of the art equipment and rigorous testing procedures help you optimize your processes, reduce emissions, and maintain regulatory compliance.               
		</p>
              </div>
            </div>
          </section>

          <section id="services" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-sky-800">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {services.map((service, index) => (
                    <div key={index}
                         className="flex flex-col items-center text-center p-8 bg-sky-100 rounded-lg">
                      <div className="w-24 h-24 mb-6">{service.icon}</div>

                      <h3 className="text-2xl font-semibold mb-4 text-sky-800">{service.name}</h3>
                      <p className="text-sky-700 text-lg">{service.description}</p>
                    </div>
                ))}
              </div>
            </div>
          </section>
		
	<section id="mission-vision" className="py-20 md:py-32 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-sky-800">Our Mission & Vision</h2>
    <div className="text-center text-sky-700 text-lg md:text-xl">
      <p className="mb-6">
        At Stack Test Group, we are dedicated to ensuring clean air quality and helping industries stay compliant with environmental regulations. Our mission is to deliver superior technical expertise in air compliance and emissions solutions.
      </p>
      <p>
        Guided by our vision for a sustainable future, we implement eco-friendly practices to reduce carbon footprints, promote health, and support an environmentally conscious global economy.
      </p>
    </div>
  </div>
</section>
          
	<section id="contact" className="py-20 md:py-32 bg-sky-100">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-sky-800">Contact Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-sky-700">Get in Touch</h3>
                  <ul className="space-y-6 text-sky-600 text-lg">
                    <li className="flex items-center">
                      <Phone className="mr-4 h-6 w-6"/>
                      <span>(641) 856-9947</span>
                    </li>
                    <li className="flex items-center">
                      <Mail className="mr-4 h-6 w-6"/>
                      <span>contact@stacktestllc.com</span>
                    </li>
                    <li className="flex items-center">
                      <MapPin className="mr-4 h-6 w-6"/>
                      <span>1500 Boyce Memorial Drive Ottawa, IL 61350</span>
                    </li>
                    <li className="flex items-center">
                      <MapPin className="mr-4 h-6 w-6"/>
                      <span>22233 230th Ave Centerville, IA 52544</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-sky-700">Send Us a Message</h3>
                  <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                    <Input name="name" placeholder="Your Name" className="bg-white text-black text-lg p-3"
                           required/>
                    <Input name="email" type="email" placeholder="Your Email"
                           className="bg-white text-black text-lg p-3" required/>
                    <Textarea name="message" placeholder="Your Message" className="bg-white text-black text-lg p-3"
                              required/>
                    <Button type="submit" className="bg-sky-600 text-white hover:bg-sky-700 text-lg py-3 px-6"
                            disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                    {submitMessage &&
                        <p className={`text-lg ${submitMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>{submitMessage}</p>}
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-sky-800 text-white py-8"> {/* Increased padding */}
          <div className="container mx-auto px-4 text-center text-lg"> {/* Increased font size */}
            <p>&copy; 2024 Stack Test Group. All rights reserved.</p>
          </div>
        </footer>
      </div>
  )
}
