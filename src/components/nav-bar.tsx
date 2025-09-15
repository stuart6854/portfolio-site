import React from 'react';
import { ThemeToggle } from './theme-toggle';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';

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

export default function NavBar() {
  return (
    <div className='flex justify-center py-6 border-b-2'>
      <NavigationMenu>
        <NavigationMenuList>
          {links.map((link) => (
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href={link.href}>{link.title}</Link>
              </NavigationMenuLink>
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
