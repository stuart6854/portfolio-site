import Link from 'next/link';
import TechStackBar from '@/components/tech-stack-bar';

export default function Home() {
  return (
    <div>
      <h1 className='mb-8 text-4xl font-bold'>Hello 👋</h1>
      <p>
        I am an{' '}
        <Link href='https://www.abertay.ac.uk' className='font-semibold text-accent-foreground underline'>
          Abertay
        </Link>{' '}
        graduate based in Scotland.
      </p>
      <p>
        I love to{' '}
        <Link href='https://github.com/stuart6854' className='font-semibold text-accent-foreground underline'>
          build things
        </Link>{' '}
        with C#/C++.
      </p>
      <p>I have also been been diving into web development lately.</p>
      <p className='mt-4'>
        Find out{' '}
        <Link href='/about' className='font-semibold text-accent-foreground underline'>
          more
        </Link>
        .
      </p>

      <div className='mt-14'>
        <h1 className='mb-6 text-2xl font-bold'>Tech Stack</h1>
        <TechStackBar />
      </div>
    </div>
  );
}
