'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Code2,
  Github,
  Linkedin,
  Sparkles,
  Coffee,
  Gamepad2,
  Brain,
  Globe2,
  Terminal,
  Laptop,
  Bike,
  Figma,
} from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: GithubLink[];
  live?: string;
};

type GithubLink = {
  title: string;
  link: string;
};

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [experienceRef, experienceInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [educationRef, educationInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techStack = [
    {
      icon: <Globe2 className='h-5 w-5' />,
      name: 'Web Standartları',
      desc: 'HTML5, CSS3, JavaScript ES6+',
    },
    {
      icon: <Terminal className='h-5 w-5' />,
      name: 'Framework & Libraries',
      desc: 'React, Next.js, Vue.js',
    },
    {
      icon: <Code2 className='h-5 w-5' />,
      name: 'Programlama',
      desc: 'TypeScript, Node.js, Nest.js, Express.js',
    },
    {
      icon: <Laptop className='h-5 w-5' />,
      name: 'Araçlar',
      desc: 'Git, Docker, Expo, CI/CD',
    },
  ];

  const hobbies = [
    {
      icon: <Figma className='h-5 w-5 text-accent' />,
      title: 'Digital Tasarım',
      desc: 'Figma ve Adobe XD ile tasarım yapıyorum',
    },
    {
      icon: <Gamepad2 className='h-5 w-5 text-accent' />,
      title: 'Oyun Geliştirme',
      desc: 'Unity ile hobi projeler geliştiriyorum',
    },
    {
      icon: <Bike className='h-5 w-5 text-accent' />,
      title: 'Bisiklet Sürme',
      desc: 'Hafta sonları bisiklet sürmeyi seviyorum',
    },
  ];

  const experienceStack = [
    {
      title: 'FullStack Developer Intern',
      company: 'Shift Accelerator',
      period: 'Feb 2022 - June 2023',
      description:
        'Modern web uygulamaları geliştirme, performans optimizasyonu ve kullanıcı deneyimi iyileştirmeleri.',
      achievements: [
        'Developed microservices using Node.js with Express.js, enabling modular and maintainable code.',
        'Enhanced search bar and listing pages in micro-frontend modules with Vue.js, Nuxt.js, and Tailwind CSS.',
        'Practiced Acceptance Test-Driven Development (ATDD), ensuring quality and alignment with business requirements.',
        '•Managed containerization of applications using Docker, streamlining development workflows.',
        'Integrated CI/CD pipelines (GitLab) for automated, fast, and secure deployment processes.',
      ],
      tech: ['NuxtJs', 'NodeJs', 'TypeScript', 'MongoDB', 'Docker', 'GitLab'],
    },
    {
      title: 'Frontend Developer',
      company: 'Özgür Yazılım',
      period: 'Aug 2023 - Dec 2024',
      description:
        'E-ticaret platformu için modern ve kullanıcı dostu arayüzler geliştirdim.',
      achievements: [
        'Developed mobile applications using Expo and React Native, ensuring an optimized and responsive user interface.',
        'Built interactive and user-friendly web applications with React and Mantine.',
        'Developed server-side applications using Java and Spring Boot, creating RESTful APIs to support the front-end.',
        'Spearheaded performance optimizations and bug fixes, resulting in a 20% improvement in app speed',
        'Collaborated within an Agile environment, participating in sprint planning, daily stand-ups, and code reviews.',
      ],
      tech: [
        'React.js',
        'React-Native',
        'Mantine',
        'Storybook',
        'java',
        'Spring Boot',
      ],
    },
  ];

  const communication = [
    {
      icon: (
        <a
          href='https://github.com/omerfarukkanli'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2'
        >
          <Github className='h-5 w-5' />
        </a>
      ),
      label: 'Github',
    },
    {
      icon: (
        <a
          href='https://www.linkedin.com/in/%C3%B6mer-faruk-kanl%C4%B1/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2'
        >
          <Linkedin className='h-5 w-5' />
        </a>
      ),
      label: 'LinkedIn',
    },
  ];

  const projects: Project[] = [
    {
      title: 'LIBRARY AUTOMATION',
      description: `This project enables users to search, filter, and sort books by title, ISBN, and author. Users can add, edit, and delete books, view them as a list on a page, and explore detailed information for each book. The backend was developed using Node.js, Express, TypeScript, and MongoDB. It features user authentication and role-based authorization: standard users can create and associate records but cannot delete them, while admins have full permissions. The project also includes an APK for seamless deployment, ensuring it doesn't rely on an IDE for execution`,
      tech: [
        'React Native',
        'TypeScript',
        'Expo',
        'NodeJS',
        'ExpressJS',
        'MongoDB',
      ],
      github: [
        {
          title: 'Mobile',
          link: 'https://github.com/omerfarukkanli/Library-Otomation-React-Native',
        },
        {
          title: 'Backend',
          link: 'https://github.com/omerfarukkanli/Library-Otomation-backend',
        },
      ],
    },
    {
      title: 'ACCOUNT APP',
      description: `This debt management web application, developed using Next.js and NestJS, enables users to add and update their debts while providing a summary of the total amount owed. The project leverages Tailwind CSS for styling and MongoDB for data storage, offering a user-friendly interface and efficient functionality for tracking financial obligations`,
      tech: ['NextJs', 'NestJS', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
      github: [
        {
          title: 'Web',
          link: 'https://github.com/omerfarukkanli/accounting-app-web',
        },
        {
          title: 'Backend',
          link: 'https://github.com/omerfarukkanli/accontApp',
        },
      ],
    },
    {
      title: 'DRAG AND DROP',
      description: `This project, developed using Next.js, Tailwind CSS, and ShadCN, enables users to effortlessly add and edit text, images, and other media elements through a drag-and-drop interface. It features a user-friendly design to simplify content creation and editing. The project provides dynamic layout-building capabilities, customization options, and supports exporting the designed layouts in JSON format.`,
      tech: ['NextJs', 'TypeScript', 'Tailwind CSS'],
      github: [
        {
          title: 'Web',
          link: 'https://github.com/omerfarukkanli/drag-and-drop',
        },
      ],
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className='relative'>
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial='hidden'
        animate={heroInView ? 'visible' : 'hidden'}
        variants={fadeInUp}
        className='min-h-screen flex items-center justify-center text-center px-4 relative overflow-hidden bg-gradient-to-b from-background via-accent/5 to-background'
      >
        <div className='relative z-10'>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className='absolute -top-20 -left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl'
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='absolute -bottom-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl'
          />
          <motion.h1
            className='text-3xl font-bold mb-6 gradient-text'
            variants={fadeInUp}
          >
            Ömer Faruk Kanlı
          </motion.h1>
          <motion.h1
            className='text-7xl font-bold mb-6 gradient-text'
            variants={fadeInUp}
          >
            Frontend Developer
          </motion.h1>
          <motion.p
            className='text-xl text-muted-foreground mb-8 max-w-5xl mx-auto'
            variants={fadeInUp}
          >
            <Sparkles className='inline-block mr-2 h-5 w-5 text-accent animate-pulse' />
            Passionate Full-Stack Developer with over 3 years of hands-on
            experience in building scalable web and mobile applications. Skilled
            in back-end and front-end development with proficiency in
            <b>JavaScript</b>, <b>TypeScript</b>, <b>Java</b>, and{' '}
            <b>Node.js</b>. Strong problem-solver with a focus on clean code,
            agile development, and <b>ATDD</b> methodologies. Experienced in
            working with <b>CI/CD</b> pipelines,{' '}
            <b>containerization (Docker)</b>, and modern development tools.
            Dedicated to developing user-friendly applications that drive
            business impact.
          </motion.p>
          <motion.div className='justify-center' variants={staggerChildren}>
            <motion.div variants={scaleUp}>
              <Button
                variant='outline'
                size='lg'
                className='border-2 hover:bg-accent/10 transition-all duration-300'
              >
                <a
                  href='https://github.com/omerfarukkanli'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2'
                >
                  <Github className='h-5 w-5' />
                  Github
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Me Section */}
      <motion.section
        ref={aboutRef}
        initial='hidden'
        animate={aboutInView ? 'visible' : 'hidden'}
        variants={staggerChildren}
        className='py-20 px-4 bg-gradient-to-b from-background to-accent/5'
      >
        <div className='max-w-6xl mx-auto'>
          <motion.h2
            className='text-4xl font-bold mb-12 text-center gradient-text'
            variants={fadeInUp}
          >
            Hakkımda
          </motion.h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <motion.div variants={fadeInUp}>
              <Card className='p-6 h-full bg-gradient-to-br from-background to-accent/5 card-hover'>
                <h3 className='text-2xl font-semibold mb-4 gradient-text flex items-center gap-2'>
                  <Brain className='h-6 w-6' />
                  Teknolojiler
                </h3>
                <div className='grid grid-cols-2 gap-4'>
                  {techStack.map((tech, index) => (
                    <div
                      key={index}
                      className='p-4 bg-background/50 rounded-lg hover:bg-accent/10 transition-colors duration-300'
                    >
                      <div className='flex items-center gap-2 text-accent mb-2'>
                        {tech.icon}
                        <span className='font-medium'>{tech.name}</span>
                      </div>
                      <p className='text-sm text-muted-foreground'>
                        {tech.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className='p-6 h-full bg-gradient-to-br from-background to-accent/5 card-hover'>
                <h3 className='text-2xl font-semibold mb-4 gradient-text flex items-center gap-2'>
                  <Coffee className='h-6 w-6' />
                  Hobiler & İlgi Alanları
                </h3>
                <div className='space-y-4'>
                  {hobbies.map((hobby, index) => (
                    <div
                      key={index}
                      className='flex items-start gap-4 p-4 bg-background/50 rounded-lg hover:bg-accent/10 transition-colors duration-300'
                    >
                      <div className='mt-1 '>{hobby.icon}</div>
                      <div>
                        <h4 className='font-medium mb-1 text-accent'>
                          {hobby.title}
                        </h4>
                        <p className='text-sm text-muted-foreground'>
                          {hobby.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}

      <motion.section
        ref={experienceRef}
        initial='hidden'
        animate={experienceInView ? 'visible' : 'hidden'}
        variants={staggerChildren}
        className='py-20 px-4 relative bg-accent/5'
      >
        <div className='max-w-4xl mx-auto relative'>
          <motion.h2
            className='text-4xl font-bold mb-12 text-center gradient-text'
            variants={fadeInUp}
          >
            İş Deneyimi
          </motion.h2>
          <div className='space-y-8'>
            {experienceStack.map((job, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className='p-6 card-hover bg-gradient-to-br from-background to-accent/5'>
                  <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
                    <div>
                      <h3 className='text-xl font-semibold gradient-text'>
                        {job.title}
                      </h3>
                      <p className='text-muted-foreground'>{job.company}</p>
                    </div>
                    <p className='text-sm text-accent font-medium bg-accent/10 px-3 py-1 rounded-full mt-2 md:mt-0'>
                      {job.period}
                    </p>
                  </div>
                  <p className='mb-4 text-muted-foreground'>
                    {job.description}
                  </p>
                  <div className='space-y-4'>
                    <div>
                      <h4 className='font-medium mb-2 text-primary'>
                        Başarılar:
                      </h4>
                      <ul className='list-disc list-inside space-y-1 text-sm text-muted-foreground'>
                        {job.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className='font-medium mb-2 text-primary'>
                        Teknolojiler:
                      </h4>
                      <div className='flex flex-wrap gap-2'>
                        {job.tech.map((tech, i) => (
                          <span
                            key={i}
                            className='text-xs bg-accent/10 text-accent px-3 py-1 rounded-full'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Projects Section */}
      <motion.section
        ref={projectsRef}
        initial='hidden'
        animate={projectsInView ? 'visible' : 'hidden'}
        variants={staggerChildren}
        className='py-20 px-4 bg-gradient-to-b from-accent/5 to-background'
      >
        <div className='max-w-4xl mx-auto'>
          <motion.h2
            className='text-4xl font-bold mb-12 text-center gradient-text'
            variants={fadeInUp}
          >
            Projeler
          </motion.h2>
          <div className='space-y-8'>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className='p-6 card-hover bg-gradient-to-br from-background to-accent/5'>
                  <div className='flex flex-col md:flex-row gap-6'>
                    <div className='flex-1'>
                      <h3 className='text-xl font-semibold gradient-text mb-3'>
                        {project.title}
                      </h3>
                      <p className='text-muted-foreground mb-4'>
                        {project.description}
                      </p>
                      <div className='flex flex-wrap gap-2 mb-4'>
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className='text-xs bg-accent/10 text-accent px-3 py-1 rounded-full'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className='flex gap-4'>
                        {project.github.map((link, i) => (
                          <Button
                            key={i}
                            variant='outline'
                            size='sm'
                            className='hover:bg-primary/10'
                            asChild
                          >
                            <a
                              href={link.link}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='flex items-center gap-2'
                            >
                              <Github className='h-4 w-4' />
                              {link.title}
                            </a>
                          </Button>
                        ))}
                        {project.live && (
                          <Button
                            variant='outline'
                            size='sm'
                            className='hover:bg-primary/10'
                            asChild
                          >
                            <a
                              href={project.live}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='flex items-center gap-2'
                            >
                              <Globe2 className='h-4 w-4' />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        ref={educationRef}
        initial='hidden'
        animate={educationInView ? 'visible' : 'hidden'}
        variants={staggerChildren}
        className='py-20 px-4 bg-background'
      >
        <div className='max-w-4xl mx-auto'>
          <motion.h2
            className='text-4xl font-bold mb-12 text-center gradient-text'
            variants={fadeInUp}
          >
            Eğitim
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Card className='p-6 card-hover bg-gradient-to-br from-background to-accent/5'>
              <h3 className='text-xl font-semibold gradient-text'>
                Bilgisayar Mühendisliği
              </h3>
              <p className='text-muted-foreground mb-2'>Düzce Üniversitesi</p>
              <p className='text-sm text-muted-foreground'>2019 - 2024</p>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className='py-12 px-4 bg-gradient-to-t from-accent/5 to-background'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='flex justify-center gap-4 mb-8'>
            {communication.map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant='ghost'
                  size='icon'
                  className='hover:bg-accent/10 hover:text-accent transition-colors duration-300'
                >
                  {social.icon}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
