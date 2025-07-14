import { Cities } from '@/features/cities';
import { allSettled, fork, serialize } from 'effector';
import { MyWeather, pageOpened } from '@/entities/weather';

export async function getSSRProps() {
  const scope = fork();
  await allSettled(pageOpened, { scope });
  const values = serialize(scope);
  return { props: { values } };
}

export default function MainPage({ values }: { values: any }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-blue-200 to-blue-100 flex flex-col items-center pb-12">
      <MyWeather />
      <Cities />
    </div>
  );
}

// export const getServerSideProps = getSSGProps;
