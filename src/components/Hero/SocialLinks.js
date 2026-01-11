import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { Button } from '@/components/ui/button';

const SocialLinks = () => {
  const socials = [
    { icon: Linkedin, href: 'https://linkedin.com/in/minnakan-seral', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:minnakanseral@gmail.com', label: 'Email' },
    { icon: Github, href: 'https://github.com/minnakan', label: 'GitHub' },
  ];

  return (
    <div className="flex gap-4">
      {socials.map(({ icon: Icon, href, label }) => (
        <Button
          key={label}
          variant="ghost"
          size="icon"
          asChild
          className="text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors duration-200"
        >
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <Icon className="h-5 w-5" />
          </a>
        </Button>
      ))}
    </div>
  );
};

export default SocialLinks;
