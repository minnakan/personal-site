import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import contactData from '../../data/contact';

const ContactSection = () => {
  const iconMap = {
    Github,
    Email: Mail,
    LinkedIn: Linkedin,
  };

  // Define order: LinkedIn, Email, Github
  const order = ['LinkedIn', 'Email', 'Github'];

  const contactMethods = order
    .map((label) => contactData.find((contact) => contact.label === label))
    .filter((contact) => contact && iconMap[contact.label])
    .map((contact) => ({
      icon: iconMap[contact.label],
      label: contact.label,
      href: contact.link,
    }));

  return (
    <section className="relative z-10 py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight text-center">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 flex flex-col items-center text-center gap-4 group"
            >
              <Icon className="h-8 w-8 text-[#737373] group-hover:text-indigo-400 transition-colors" />
              <h3 className="font-semibold text-white group-hover:text-indigo-400 transition-colors">{label}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
