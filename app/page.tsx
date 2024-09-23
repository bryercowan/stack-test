"use client";

import { Button } from "@/components/ui/button"
import Image from 'next/image';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { CheckCircleIcon, ShieldCheckIcon, FireIcon } from "@heroicons/react/16/solid";
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
      description: "Air Compliance testing to ensure compliance with enviornmental regulations like MACT and permit conditions, covering emissions sampling and visible opacity",
    icon: <ShieldCheckIcon className="w-16 h-16 mb-4 text-sky-600" />
	},
    {
      name: "Combustion/Control Device Optimization",
      description: "Optimization for combustion systems, including ammonia slip evaluations, boiler testing, and efficiency determinations for various pollution control devices like scrubbers and electrostatic precipitators", 
    	icon: <FireIcon className="w-16 h-16 mb-4 text-sky-600" />
    },
    {
      name: "Emissions Studies and Specialized Testing",
      description: "Advanced emissions studies, such as air toxic studies, particle size distribution, and testing for reactive volatile organic compounds, using technologies like FTIR",
    	icon: <CheckCircleIcon className="w-16 h-16 mb-4 text-sky-600" />
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-sky-50">
     <header  className="bg-sky-600 text-white"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(28, 169, 232, 1) 30%, rgba(28, 169, 232, 0) 70%), url('/new_stack.png')",
          backgroundSize: '100% 100%',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
	height: '50vh',
        }}>
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <Image src="/stack-test.png" alt="Stack Test" width={80} height={100} />
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
	 <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4">Expert Stack Testing Services</h2>
          <p className="text-xl">Ensuring compliance and optimizing performance for your industrial stacks</p>
        </div>
      </header>

      <main>
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-sky-800">About Stack Test Group</h2>
            <div className="max-w-3xl mx-auto text-center text-sky-700">
              <p className="mb-4">
                Stack Test Group is a leading provider of stack testing services for industrial facilities. With over 50 years of experience and a team of certified professionals, we deliver accurate and reliable emissions testing to ensure your compliance with environmental regulations.
              </p>
              <p>
                Our state-of-the-art equipment and rigorous testing procedures help you optimize your processes, reduce emissions, and maintain regulatory compliance.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-sky-800">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-sky-100 rounded-lg">
			{service.icon}
                  <h3 className="text-xl font-semibold mb-2 text-sky-800">{service.name}</h3>
                  <p className="text-sky-700">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-sky-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-sky-800">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-sky-700">Get in Touch</h3>
                <ul className="space-y-4 text-sky-600">
                  <li className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    <span>(641) 856-9947</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="mr-2 h-5 w-5" />
                    <span>contact@stacktestllc.com</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5" />
                    <span>1500 Boyce Memorial Drive Ottawa, IL 61350</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5" />
                    <span>22233 30th Ave Centerville, IA 52544</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-sky-700">Send Us a Message</h3>
                <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
                  <Input name="name" placeholder="Your Name" className="bg-white text-black" required/>
                  <Input name="email" type="email" placeholder="Your Email" className="bg-white text-black" required/>
                  <Textarea name="message" placeholder="Your Message" className="bg-white text-black" required/>
                  <Button type="submit" className="bg-sky-600 text-white hover:bg-sky-700" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                  {submitMessage &&
                      <p className={submitMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}>{submitMessage}</p>}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-sky-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Stack Test Group. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
