import { Cities } from '@/features/cities';
import { allSettled, fork, serialize } from 'effector';
import { MyWeather, pageOpened } from '@/entities/weather';
import Link from 'next/link';

export const getServerSideProps = async () => {
  const scope = fork();
  await allSettled(pageOpened, { scope });
  const values = serialize(scope);

  return { props: { values } };
};

export default function MainPage() {
  return (
    <div className="min-h-screen flex flex-col items-center relative">
      <MyWeather />
      <Cities />
      <Link
        href="/random"
        className="fixed bottom-8 left-1/2 -translate-x-1/2 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-400 to-blue-400 text-white text-lg font-bold shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 z-50 border-none outline-none focus:outline-none"
        style={{ minWidth: 220, textAlign: 'center' }}>
        🎲 Случайный город
      </Link>
    </div>
  );
}
