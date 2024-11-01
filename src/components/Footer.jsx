

import { ButtonPrimary } from "./Button";

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Experience',
      href: '#experience'
    },
    {
      label: 'Education',
      href: '#education'
    },
    {
        label: 'Skills',
        href: '#skills'
      },
    {
      label: 'Projects',
      href: '#work'
    },
    {
      label: 'Freelance',
      href: '#publications'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/bentley386'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/andrej-kolar-po%C5%BEun-0271a51a5/'
    },
    {
      label: 'ResearchGate',
      href: 'https://www.researchgate.net/profile/Andrej-Kolar-Pozun'
    },
];



const Footer = () => {
    return (
        <footer className="section">
            <div className="container">
                <div className="lg:grid lg:grid-cols-2">

                    <div className="mb-10">
                        <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                            Let&apos;s work together today!
                        </h2>

                        <ButtonPrimary
                        href="mailto:andrejpozun@ptrotonmail.com"
                        label="Start project"
                        icon="chevron_right"
                        classes="reveal-up"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:pl-20">
                        <div>
                            <p className="mb-2 reveal-up">Sitemap</p>

                            <ul>
                                {sitemap.map(({label,href},key) => (
                                    <li key={key}>
                                        <a
                                        href={href}
                                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="mb-2 reveal-up">Socials</p>

                            <ul>
                                {socials.map(({label,href},key) => (
                                    <li key={key}>
                                        <a
                                        href={href}
                                        target="_blank"
                                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-10 mb-8">
                    <a
                    href="/"
                    className="logo reveal-up"
                    >
                        <img
                        src="/images/logo.svg"
                        width={40}
                        height={40}
                        alt="Logo"
                        />
                    </a>

                    <p className="text-zinc-500 text-sm reveal-up">
                        &copy; 2024 <span className="text-zinc-200">MiryangSim</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer