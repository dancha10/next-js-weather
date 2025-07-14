import { WeatherInfo } from '@/entities/weather';

export async function getSSRProps(context: any) {
  const { id } = context.params as { id: string };
  return { props: { id } };
}

export async function getSSGProps(context: any) {
  const { id } = context.params as { id: string };
  return { props: { id } };
}

export async function getSSGPaths() {
  return {
    paths: [
        { params: { id: 'moscow' } },
        { params: { id: 'saint-petersburg' } },
        { params: { id: 'kazan' } },
        { params: { id: 'sochi' } },
        { params: { id: 'yekaterinburg' } },
      ],
      fallback: false
  };
}

export default function DetailsPage({ id }: { id: string }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-yellow-50 flex flex-col items-center pb-12">
      <WeatherInfo id={id} />
    </div>
  );
} 
export const getStaticProps = getSSGProps;
export const getStaticPaths = getSSGPaths;
