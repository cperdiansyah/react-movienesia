/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import './footer.scss';

export default function Footer() {
  const footerContent = [
    {
      section: 'Services',
      link: [
        {
          name: 'Movies',
          href: '/',
        },
        {
          name: 'TV Channel',
          href: '/',
        },
        {
          name: 'Cinema Ticket',
          href: '/',
        },
        {
          name: 'Newsletter',
          href: '/',
        },
        {
          name: 'Blogs Article',
          href: '/',
        },
      ],
    },
    {
      section: 'Information',
      link: [
        {
          name: 'Sign Up',
          href: '/',
        },
        {
          name: 'Download App',
          href: '/',
        },
        {
          name: 'Choose Plan',
          href: '/',
        },
        {
          name: 'Pay Method',
          href: '/',
        },
      ],
    },
    {
      section: 'Company',
      link: [
        {
          name: 'Patnership',
          href: '/',
        },
        {
          name: 'Terms of Use',
          href: '/',
        },
        {
          name: 'About',
          href: '/',
        },
        {
          name: 'Pricing',
          href: '/',
        },
        {
          name: 'Contact',
          href: '/',
        },
      ],
    },
  ];
  return (
    <footer className="py-12 bg-gray-800">
      <div className="container">
        <div className=" w-full flex footer-content pb-10 pt-5">
          {footerContent.map((item, index) => (
            <div className="footer-services md:w-1/4" key={index}>
              <h3 className="text-xl font-medium text-text_primary_dark">
                {item.section}
              </h3>
              <ul className="list-reset pt-3">
                {item.link.map((link, index) => (
                  <li className="mt-4" key={index}>
                    <a
                      href={link.href}
                      className="text-text_secondary_dark text-base"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-services md:w-1/4">
            <h3 className="text-lg font-medium text-text_primary_dark">
              Contact Us
            </h3>
            <p className="pt-3 mt-4  text-text_secondary_dark text-lg">
              Stay connected with us and let's know more stories about new
              movies and More Explorer Us for get it
            </p>
          </div>
        </div>

        <div className="footer-cr w-full pt-5 border-t border-slate-400">
          <p className="font-medium text-sm text-text_primary_dark text-center">
            © MovieNesia {new Date().getFullYear()} | Made with by{' '}
            <span className="text-pink-500">❤️</span> by{' '}
            <a
              href="https://www.linkedin.com/in/cperdiansyah"
              target="_blank"
              className="font-bold text-primary"
              rel="noopener noreferrer"
            >
              Chandra Perdiansyah
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
