import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const footerLinks = {
  company: [
    { name: 'About', href: '#' },
    { name: 'Terms of Use', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'How it Works', href: '#' },
    { name: 'Contact Us', href: '#' },
  ],
  getHelp: [
    { name: 'Support Career', href: '#' },
    { name: '24h Service', href: '#' },
    { name: 'Quick Chat', href: '#' },
  ],
  support: [
    { name: 'FAQ', href: '#' },
    { name: 'Policy', href: '#' },
    { name: 'Business', href: '#' },
  ],
  contact: [
    { name: 'WhatsApp', href: '#' },
    { name: 'Support 24', href: '#' },
  ],
};

const FooterSection = () => {
  return (
    <section className="bg-gray-50 text-gray-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1 cursor-pointer">
                <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
                <div className="w-4 h-4 bg-red-600 rounded-full opacity-100 hover:opacity-75 transition-opacity -ml-2"></div>
              </div>
              <span className="text-xl font-semibold text-gray-700">The Next Design</span>
            </div>

            <p className="text-sm mb-6">
              The copy warmed the little Blind Text, that where it came from it would have been rewritten a thousand times.
            </p>

            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200">
                <FacebookIcon className="!text-[20px]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white transition-all duration-200">
                <WhatsAppIcon className="!text-[20px]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-pink-600 hover:text-white transition-all duration-200">
                <InstagramIcon className="!text-[20px]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-400 hover:text-white transition-all duration-200">
                <XIcon className="!text-[20px]" />
              </a>
            </div>
          </div>

          {/* Footer Navigation Links */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h4 className="text-lg font-semibold text-gray-700 mb-3 capitalize">
                  {section.replace(/([A-Z])/g, ' $1')}
                </h4>
                <ul className="space-y-2">
                  {links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.href}
                        className="text-sm hover:text-blue-600 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} The Next Design. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
