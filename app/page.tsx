import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function StackTestGroup() {
  const services = [
    {
      name: "Continuous Emissions Monitoring",
      description: "Real-time monitoring of your stack emissions to ensure compliance with environmental regulations.",
      icon: "M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6Z"
    },
    {
      name: "Particulate Matter Testing",
      description: "Accurate measurement of particulate matter in your emissions to help you meet air quality standards.",
      icon: "M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7Z"
    },
    {
      name: "Custom Testing Solutions",
      description: "Tailored testing programs to address your specific industry needs and regulatory requirements.",
      icon: "M17 18V20H7V18H17ZM6.5 12.5L3 15V16.5H21V15L17.5 12.5L14.5 14.5L9.5 10.5L6.5 12.5ZM21 13.5V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V13.5L6.5 11L11.5 15L14.5 13L17.5 15L21 13.5Z"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-sky-50">
      <header className="bg-sky-600 text-white">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Stack Test Group</h1>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
          <div className="mt-16 mb-20 text-center">
            <h2 className="text-4xl font-bold mb-4">Expert Stack Testing Services</h2>
            <p className="text-xl">Ensuring compliance and optimizing performance for your industrial stacks</p>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-sky-800">About Stack Test Group</h2>
            <div className="max-w-3xl mx-auto text-center text-sky-700">
              <p className="mb-4">
                Stack Test Group is a leading provider of stack testing services for industrial facilities. With years of experience and a team of certified professionals, we deliver accurate and reliable emissions testing to ensure your compliance with environmental regulations.
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
                  <svg
                    className="w-16 h-16 mb-4 text-sky-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d={service.icon}></path>
                  </svg>
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
                    <span>(555) 123-4567</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="mr-2 h-5 w-5" />
                    <span>info@stacktestgroup.com</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5" />
                    <span>123 Industrial Ave, Anytown, USA 12345</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-sky-700">Send Us a Message</h3>
                <form className="space-y-4">
                  <Input placeholder="Your Name" className="bg-white" />
                  <Input type="email" placeholder="Your Email" className="bg-white" />
                  <Textarea placeholder="Your Message" className="bg-white" />
                  <Button type="submit" className="bg-sky-600 text-white hover:bg-sky-700">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-sky-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Stack Test Group. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
