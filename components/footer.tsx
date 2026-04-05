'use client'

import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Instrument_Serif } from 'next/font/google'
import { cn } from '@/lib/utils'

const headingSerif = Instrument_Serif({
    subsets: ['latin'],
    weight: ['400'],
})

const footerLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Services', href: '#services' },
    { name: 'Experts', href: '#experts' },
]

export const Footer = () => {
    return (
        <footer className="bg-background border-t">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 md:py-4">
                <div className="hidden md:flex flex-col md:flex-row justify-between items-start gap-8 md:gap-4">
                    <div className="flex flex-col gap-1">
                        <Link href="/" className="flex items-center">
                            <Logo />
                        </Link>

                    </div>

                    <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 pt-6">
                        <div className="flex flex-col gap-2">
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Navigation</h4>
                            <ul className="flex flex-col gap-2">
                                {footerLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground hover:text-[#fc5610] transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contact</h4>
                            <ul className="flex flex-col gap-2">
                                <li>
                                    <a
                                        href="mailto:hello@owlstanding.com"
                                        className="text-sm text-muted-foreground hover:text-[#fc5610] transition-colors"
                                    >
                                        hello@owlstanding.com
                                    </a>
                                </li>
                                <li className="text-sm text-muted-foreground">
                                    Odisha, India
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="md:mt-8 pt-4 md:border-t flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground font-medium">
                        © {new Date().getFullYear()} OwlStanding. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <p className={cn(headingSerif.className, "text-lg text-foreground italic")}>
                            Think Harder.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
