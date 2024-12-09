import { Building2, HomeIcon, Newspaper, PencilIcon, Store, User } from 'lucide-react';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Dock, DockIcon } from '@/components/ui/dock';

const DATA = {
  portfolio: [
    { href: '#', icon: HomeIcon, label: 'Home' },
    { href: '#', icon: User, label: 'About' },
  ],

  personal: [
    { href: '#', icon: Building2, label: 'Emprendimiento' },
    { href: '#', icon: PencilIcon, label: 'Blog' },
    { href: '#', icon: Newspaper, label: 'Newsletter' },
    { href: '#', icon: Store, label: 'Store' },
  ],
};

export default function DockSection() {
  return (
    <div className="fixed bottom-8 left-1/2 z-10 -translate-x-1/2">
      <TooltipProvider>
        <Dock direction="middle" magnification={60} distance={100}>
          {DATA.portfolio.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: 'ghost', size: 'icon' }),
                      'size-12 rounded-full',
                    )}
                  >
                    <item.icon className="size-4" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {DATA.personal.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: 'ghost', size: 'icon' }),
                      'size-12 rounded-full',
                    )}
                  >
                    <item.icon className="size-4" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
}
