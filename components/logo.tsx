import { cn } from '../lib/utils'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center gap-1', className)}>
            <img src="/favicon.svg" alt="OwlStanding" className="h-[99px] w-[99px]" />
            <span className="font-serif-display text-2xl text-foreground font-normal">OwlStanding</span>
        </div>
    )
}

export const LogoIcon = ({ className }: { className?: string }) => {
    return (
        <img src="/favicon.svg" alt="OwlStanding" className={cn('h-[99px] w-[99px]', className)} />
    )
}
