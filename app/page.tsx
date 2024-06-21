import Summary from '@/components/Summary';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='container mx-auto md:w-[60rem] overflow-auto p-4 md:p-16'>
      <Summary />
    </main>
  );
}
