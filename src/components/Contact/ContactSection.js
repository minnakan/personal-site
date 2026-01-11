import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import contactData from '../../data/contact';

const ContactSection = () => {
  const iconMap = {
    'Github': Github,
    'Email': Mail,
    'LinkedIn': Linkedin,
  };

  const contactMethods = contactData
    .filter(contact => iconMap[contact.label])
    .map(contact => ({
      icon: iconMap[contact.label],
      label: contact.label,
      value: contact.link.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''),
      href: contact.link,
    }));

  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-tight text-center">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 flex flex-col items-center text-center gap-4 group"
            >
              <Icon className="h-8 w-8 text-[#737373] group-hover:text-indigo-400 transition-colors" />
              <div>
                <h3 className="font-semibold text-white mb-1">{label}</h3>
                <span className="text-sm text-[#A3A3A3] group-hover:text-white transition-colors">
                  {value}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
