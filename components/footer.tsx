'use client'

import Link from 'next/link'
import { Icon } from '@iconify/react'
import { cn } from '@/lib/utils'

const footerLinks = [
    { name: 'About', href: '/home' },
    { name: 'Features', href: '/home#features' },
    { name: 'Services', href: '/home#services' },
    { name: 'Experts', href: '/home#experts' },
    { name: 'Cohort', href: '/cohort' },
]

const socialLinks = [
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/owlstanding',
        icon: 'mdi:instagram',
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com',
        icon: 'mdi:linkedin',
    },
    {
        name: 'Email',
        href: 'mailto:hello@owlstanding.com',
        icon: 'mdi:email-outline',
    },
]

export const Footer = ({ className }: { className?: string }) => {
    return (
        <footer className={cn("border-t border-foreground/10 bg-background", className)}>
            <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8">
                <div className="py-8 md:hidden">
                    <div className="flex items-center justify-center gap-5">
                        {socialLinks.map(({ name, href, icon }) => (
                            <a
                                key={name}
                                href={href}
                                aria-label={name}
                                className="text-foreground transition-colors hover:text-[#fc5610]"
                                target={href.startsWith('http') ? '_blank' : undefined}
                                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                                <Icon icon={icon} className="size-5" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6 md:py-10">
                    <Link href="/home" className="flex items-center gap-4 justify-start">
                        <img src="/favicon.svg" alt="OwlStanding" className="h-16 w-16 shrink-0" />
                        <span className="font-serif-display text-[2.1rem] leading-none text-foreground">OwlStanding</span>
                    </Link>

                    <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-foreground/80">
                        {footerLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="font-serif-display transition-colors hover:text-[#fc5610]"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center justify-end gap-5">
                        {socialLinks.map(({ name, href, icon }) => (
                            <a
                                key={name}
                                href={href}
                                aria-label={name}
                                className="text-foreground transition-colors hover:text-[#fc5610]"
                                target={href.startsWith('http') ? '_blank' : undefined}
                                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                                <Icon icon={icon} className="size-5" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="border-t border-foreground/10 py-6">
                    <p className="text-center text-sm text-foreground">
                        © {new Date().getFullYear()} OwlStanding. Think Harder.
                    </p>
                </div>
            </div>
        </footer>
    )
}
