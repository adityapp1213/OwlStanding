'use client'

import localFont from 'next/font/local'
import { cn } from '@/lib/utils'

const footerPalatino = localFont({
    src: '../assets/fonts/Palatino/palr45w.ttf',
    display: 'swap',
    weight: '400',
    style: 'normal',
})

export const Footer = ({ className }: { className?: string }) => {
    return (
        <section className={cn("relative z-10 bg-white px-4 pb-4 pt-4 sm:px-6 lg:pt-6", className)}>
            <footer
                className="mx-auto flex min-h-[58vh] w-full max-w-[calc(100vw-2rem)] flex-col justify-end overflow-hidden rounded-xl px-5 pb-6 text-white antialiased sm:px-7 lg:min-h-[62vh] lg:max-w-[calc(100vw-3rem)] lg:px-8 lg:pb-8"
                style={{
                    backgroundColor: '#7ec8f5',
                    backgroundImage:
                        'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMS4xIiBudW1PY3RhdmVzPSI1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIiBvcGFjaXR5PSIxIi8+PC9zdmc+)',
                    backgroundRepeat: 'repeat',
                    backgroundSize: '180px 180px',
                    backgroundBlendMode: 'multiply',
                }}
            >
                <div className="relative">
                    <h2 className={cn(
                        footerPalatino.className,
                        "relative z-0 select-none whitespace-nowrap text-[17.25vw] font-normal leading-[0.82] tracking-[-0.11em] text-white sm:text-[18.5vw] lg:text-[21.5vw]"
                    )}>
                        owlstanding.in
                    </h2>
                </div>

                <div className={cn(
                    footerPalatino.className,
                    "mt-3 flex w-full flex-col items-start gap-5 text-sm font-medium uppercase leading-tight tracking-[-0.04em] text-white sm:mt-0 sm:flex-row sm:items-end sm:justify-between sm:text-base lg:text-lg"
                )}>
                    <div className="flex w-full items-start justify-between gap-8 sm:w-fit sm:justify-start sm:gap-16">
                        <p>
                            THINK HARDER.
                        </p>
                    </div>

                    <div className="flex w-full items-start justify-between gap-8 sm:w-fit sm:justify-start sm:gap-16">
                        <p className="text-left sm:text-right">
                            ALL RIGHTS RESERVED © 2026
                        </p>
                    </div>
                </div>
            </footer>
        </section>
    )
}
