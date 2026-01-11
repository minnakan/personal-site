# Deep Void Design System Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the portfolio from a light minimalist theme to an ultra-dark "Deep Void" aesthetic with high contrast, glassmorphism, and border-heavy design

**Architecture:** Update global CSS variables to deep dark palette (neutral-950/black backgrounds), modify Hero component for split layout with integrated socials, implement new ProjectCard component with grayscale-to-color hover effects and glassmorphic styling

**Tech Stack:** React, Tailwind CSS, shadcn/ui components (Card, Badge, Button), Lucide Icons

---

## Task 1: Install shadcn/ui Components

**Files:**
- Create: `src/components/ui/card.jsx`
- Create: `src/components/ui/badge.jsx`
- Create: `src/components/ui/button.jsx`
- Create: `src/lib/utils.js`

**Step 1: Create utils helper file**

Create `src/lib/utils.js`:

```javascript
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
```

**Step 2: Install required dependencies**

Run: `npm install clsx tailwind-merge class-variance-authority`
Expected: Dependencies installed successfully

**Step 3: Add Card component**

Run: `npx shadcn@latest add card`
Expected: Card component added to `src/components/ui/card.jsx`

**Step 4: Add Badge component**

Run: `npx shadcn@latest add badge`
Expected: Badge component added to `src/components/ui/badge.jsx`

**Step 5: Add Button component**

Run: `npx shadcn@latest add button`
Expected: Button component added to `src/components/ui/button.jsx`

**Step 6: Verify components exist**

Run: `ls -la src/components/ui/ && ls -la src/lib/`
Expected: card.jsx, badge.jsx, button.jsx in ui/, utils.js in lib/

**Step 7: Commit**

```bash
git add src/components/ui/ src/lib/ package.json package-lock.json
git commit -m "$(cat <<'EOF'
feat: install shadcn/ui components

Add Card, Badge, and Button components with utility helpers for the Deep Void redesign.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
EOF
)"
```

---

## Task 2: Update Global CSS Theme to Deep Void Palette

**Files:**
- Modify: `src/index.css:1-70`
- Modify: `tailwind.config.js:16-66`

**Step 1: Update CSS variables for deep void theme**

In `src/index.css`, replace the `:root` and `.dark` sections (lines 6-59) with:

```css
@layer base {
  :root {
    /* Deep Void Palette - Default to dark theme */
    --background: 0 0% 4%;        /* neutral-950 / #0a0a0a */
    --foreground: 0 0% 98%;        /* neutral-50 / #fafafa */
    --card: 0 0% 9%;               /* neutral-900/50 */
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 4%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 0 0% 9%;
    --secondary: 0 0% 15%;         /* neutral-800 */
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 15%;
    --muted-foreground: 0 0% 64%;  /* neutral-400 */
    --accent: 221 83% 53%;         /* indigo-500 for accents */
    --accent-foreground: 0 0% 98%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 15%;            /* neutral-800 */
    --input: 0 0% 15%;
    --ring: 0 0% 32%;              /* neutral-600 */
    --radius: 0.75rem;
  }
}
```

**Step 2: Update Tailwind config custom colors**

In `tailwind.config.js`, replace the custom design system colors (lines 57-65) with:

```javascript
        // Deep Void Design System
        'bg-primary': '#0a0a0a',      // neutral-950
        'bg-card': '#171717',          // neutral-900
        'text-primary': '#fafafa',     // neutral-50
        'text-secondary': '#a3a3a3',   // neutral-400
        'text-muted': '#737373',       // neutral-500
        'accent-primary': '#6366f1',   // indigo-500
        'accent-hover': '#818cf8',     // indigo-400
        'border-subtle': '#262626',    // neutral-800
        'border-active': '#525252',    // neutral-600
```

**Step 3: Test the build**

Run: `npm run build`
Expected: Build succeeds without errors

**Step 4: Commit**

```bash
git add src/index.css tailwind.config.js
git commit -m "$(cat <<'EOF'
style: implement Deep Void color palette

Update CSS variables and Tailwind config to use ultra-dark theme with neutral-950 backgrounds and high contrast text.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
EOF
)"
```

---

## Task 3: Create Social Links Component

**Files:**
- Create: `src/components/Hero/SocialLinks.js`

**Step 1: Create SocialLinks component**

Create `src/components/Hero/SocialLinks.js`:

```javascript
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SocialLinks = () => {
  const socials = [
    { icon: Github, href: 'https://github.com/minnakan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/minnakan-seral', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:minnakanseral@gmail.com', label: 'Email' },
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
```

**Step 2: Verify the file was created**

Run: `cat src/components/Hero/SocialLinks.js | head -5`
Expected: Shows import statements

**Step 3: Commit**

```bash
git add src/components/Hero/SocialLinks.js
git commit -m "$(cat <<'EOF'
feat: add SocialLinks component

Create reusable social links component with GitHub, LinkedIn, and Email icons using Lucide and shadcn Button.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
EOF
)"
```

---

## Task 4: Update Hero Component for Split Layout

**Files:**
- Modify: `src/components/Hero/Hero.js:1-104`

**Step 1: Update Hero component with split layout**

Replace the entire content of `src/components/Hero/Hero.js` with:

```javascript
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import SocialLinks from './SocialLinks';
import work from '../../data/resume/work';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.toLocaleDateString('en-US', { month: 'short' });
  const year = date.getFullYear();
  return `${month} ${year}`;
};

const Hero = () => {
  const sortedWork = [...work].sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
      <div className="flex flex-col md:flex-row gap-12 items-center justify-center max-w-7xl w-full">

        {/* Left Column: Identity & Socials */}
        <div className="flex flex-col items-center gap-6">
          <img
            src="/images/me.jpg"
            alt="Minnakan Seral"
            className="h-40 w-40 rounded-full border-2 border-neutral-800 object-cover"
          />
          <div className="flex flex-col gap-2 text-center max-w-md">
            <h1 className="text-5xl font-bold tracking-tighter text-neutral-50">
              Minnakan Seral
            </h1>
            <p className="text-lg text-neutral-400">
              MS Computer Engineering | Unreal Engine | Qt
            </p>
          </div>
          <SocialLinks />
        </div>

        {/* Right Column: Work Experience Panel */}
        <Card className="bg-neutral-900/20 border border-neutral-800 backdrop-blur-sm">
          <CardHeader>
            <h2 className="text-sm font-semibold tracking-widest uppercase text-neutral-400">
              Work Experience
            </h2>
          </CardHeader>
          <CardContent className="space-y-4">
            {sortedWork.map((job, index) => (
              <div key={index} className="border-l-2 border-neutral-700 pl-4">
                <h3 className="font-semibold text-white">{job.position}</h3>
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  {job.name}
                </a>
                <p className="text-xs text-neutral-500">
                  {formatDate(job.startDate)} - {job.endDate ? formatDate(job.endDate) : 'Present'}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Hero;
```

**Step 2: Test the build**

Run: `npm run build`
Expected: Build succeeds without errors

**Step 3: Commit**

```bash
git add src/components/Hero/Hero.js
git commit -m "$(cat <<'EOF'
feat: redesign Hero with split layout

Implement Deep Void split hero layout with left column (avatar, name, bio, socials) and right column (work experience card with glassmorphism).

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
EOF
)"
```

---

## Task 5: Create ProjectCard Component

**Files:**
- Create: `src/components/Projects/ProjectCard.js`

**Step 1: Create ProjectCard component**

Create `src/components/Projects/ProjectCard.js`:

```javascript
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MoveUpRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <Card className="group h-full flex flex-col justify-between bg-neutral-900/20 border-neutral-800 hover:border-neutral-600 transition-colors duration-300">

        {/* Image Area */}
        <div className="relative aspect-video overflow-hidden rounded-t-xl bg-neutral-900">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <CardHeader>
          <div className="flex justify-between items-start gap-2">
            <h3 className="text-xl font-bold text-neutral-100 group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <MoveUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors flex-shrink-0" />
          </div>
          <p className="text-sm text-neutral-400 leading-relaxed mt-2">
            {project.subtitle || project.description}
          </p>
        </CardHeader>

        {/* Tech Stack */}
        <CardFooter className="flex gap-2 flex-wrap mt-auto">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-neutral-700 text-neutral-400 text-[10px]"
            >
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </a>
  );
};

export default ProjectCard;
```

**Step 2: Verify file was created**

Run: `cat src/components/Projects/ProjectCard.js | head -10`
Expected: Shows imports and component structure

**Step 3: Commit**

```bash
git add src/components/Projects/ProjectCard.js
git commit -m "$(cat <<'EOF'
feat: create ProjectCard component

Implement Deep Void project card with grayscale-to-color hover effect, glassmorphism, and tech stack badges.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
EOF
)"
```

---

## Task 6: Update ProjectsSection Component

**Files:**
- Modify: `src/components/Projects/ProjectsSection.js:1-end`

**Step 1: Read current ProjectsSection**

Run: `cat src/components/Projects/ProjectsSection.js`
Expected: Shows current implementation

**Step 2: Update ProjectsSection to use new ProjectCard**

Replace entire content of `src/components/Projects/ProjectsSection.js`:

```javascript
import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../../data/projects';

const ProjectsSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-neutral-50 mb-12 tracking-tight">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
```

**Step 3: Test the build**

Run: `npm run build`
Expected: Build succeeds without errors

**Step 4: Commit**

```bash
git add src/components/Projects/ProjectsSection.js
git commit -m "$(cat <<'EOF'
feat: update ProjectsSection with new layout

Refactor ProjectsSection to use new ProjectCard component with 3-column grid layout for Deep Void design.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
EOF
)"
```

---

## Task 7: Update ContactSection Styling

**Files:**
- Modify: `src/components/Contact/ContactSection.js:1-end`

**Step 1: Read current ContactSection**

Run: `cat src/components/Contact/ContactSection.js`
Expected: Shows current implementation

**Step 2: Update ContactSection with Deep Void styling**

Replace entire content of `src/components/Contact/ContactSection.js`:

```javascript
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'minnakanseral@gmail.com',
      href: 'mailto:minnakanseral@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/minnakan',
      href: 'https://github.com/minnakan',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/minnakan-seral',
      href: 'https://linkedin.com/in/minnakan-seral',
    },
  ];

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
```

**Step 3: Test the build**

Run: `npm run build`
Expected: Build succeeds without errors

**Step 4: Commit**

```bash
git add src/components/Contact/ContactSection.js
git commit -m "$(cat <<'EOF'
feat: update ContactSection with Deep Void styling

Apply glassmorphic cards and Deep Void color palette to contact section with icon-based layout.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
EOF
)"
```

---

## Task 8: Final Build Verification and Visual Testing

**Files:**
- None (verification only)

**Step 1: Clean build**

Run: `npm run build`
Expected: Build completes successfully with no errors or warnings

**Step 2: Start development server**

Run: `npm run dev`
Expected: Server starts on localhost, no console errors

**Step 3: Visual verification checklist**

Open the app in browser and verify:
- [ ] Background is deep black/neutral-950
- [ ] Hero has split layout with avatar on left, work experience card on right
- [ ] Social icons appear below bio in Hero
- [ ] Work experience card has glassmorphic effect (backdrop-blur)
- [ ] Project cards are in 3-column grid (on desktop)
- [ ] Project images are grayscale and become color on hover
- [ ] Project cards have border-neutral-800 that changes to border-neutral-600 on hover
- [ ] Tech stack badges have proper styling with outline variant
- [ ] Contact section has 3 cards with icons and glassmorphic styling
- [ ] All text colors follow neutral-50 (headings) and neutral-400 (secondary) palette

**Step 4: Stop development server**

Run: Press Ctrl+C in the terminal running dev server
Expected: Server stops

**Step 5: Commit final verification**

```bash
git commit --allow-empty -m "$(cat <<'EOF'
test: verify Deep Void design implementation

Confirmed all visual elements match design spec: ultra-dark palette, glassmorphism, grayscale hover effects, and proper layout structure.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
EOF
)"
```

---

## Notes

- **DRY Principle:** Reused Card, Badge, Button components across Hero, Projects, and Contact sections
- **YAGNI Principle:** No over-engineering; implemented only what the design spec requires
- **Testing Strategy:** Each task includes build verification; final task includes comprehensive visual testing
- **Accessibility:** All interactive elements include proper ARIA labels and semantic HTML
- **Performance:** Using Tailwind utilities and CSS transforms for smooth hover animations

## Dependencies Added

- `clsx` - Utility for constructing className strings
- `tailwind-merge` - Merge Tailwind classes without conflicts
- `class-variance-authority` - For shadcn/ui component variants
- shadcn/ui components: Card, Badge, Button
