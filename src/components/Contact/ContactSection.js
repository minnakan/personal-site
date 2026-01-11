import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import contactData from '../../data/contact';

const ContactSection = () => {
  // Map contact data to display format with lucide-react icons
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
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-neutral-50 mb-12 tracking-tight text-center">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map(({ icon: Icon, label, value, href }) => (
            <Card
              key={label}
              className="bg-neutral-900/20 border-neutral-800 hover:border-neutral-600 transition-colors duration-300 backdrop-blur-sm"
            >
              <CardContent className="flex flex-col items-center text-center p-6 gap-4">
                <Icon className="h-8 w-8 text-neutral-400" />
                <div>
                  <h3 className="font-semibold text-white mb-1">{label}</h3>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
                  >
                    {value}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
