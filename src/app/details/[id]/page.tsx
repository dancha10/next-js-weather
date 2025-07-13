import { WeatherInfo } from '@/entities/weather';

export default async function DetailsPage({ params }: { params: { id: string } }) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-yellow-50 flex flex-col items-center pb-12">
      <WeatherInfo id={id} />
    </div>
  );
}
