'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import { ThemeToggle } from './theme-toggle';
import {
  NavigationMenu,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const links: { title: string; href: string }[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'Tools',
    href: '/tools',
  },
  {
    title: 'Timeline',
    href: '/timeline',
  },
  {
    title: 'About',
    href: '/about',
  },
];

const Link = ({ href, children, ...props }: { href: string; children?: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = href == pathname;

  return (
    <NavigationMenuLink asChild active={isActive}>
      <NextLink href={href} className='NavigationMenuLink' {...props}>
        {children}
      </NextLink>
    </NavigationMenuLink>
  );
};

export default function NavBar() {
  return (
    <div className='flex justify-center py-6 border-b-2'>
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          {links.map((link) => (
            <NavigationMenuItem key={link.title}>
              <Link href={link.href}>{link.title}</Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className='absolute right-4'>
        <ThemeToggle />
      </div>
    </div>
  );
}
