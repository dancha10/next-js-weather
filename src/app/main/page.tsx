import { Cities } from '@/features/cities';
import { EffectorNext } from '@effector/next';
import { allSettled, fork, serialize } from 'effector';
import { MyWeather, pageOpened } from '@/entities/weather';

export default async function MainPage() {
  const scope = fork();
  const values = serialize(scope);

  await allSettled(pageOpened, { scope });

  return (
    <EffectorNext values={values}>
      <div className="min-h-screen bg-gradient-to-br from-purple-200 via-blue-200 to-blue-100 flex flex-col items-center pb-12">
        <MyWeather />
        <Cities />
      </div>
    </EffectorNext>
  );
}
