import { WeatherInfo } from '@/entities/weather';
import { GetServerSideProps, GetStaticProps, GetStaticPaths } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };
  return { props: { id } };
};

export const _getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as { id: string };
  return { props: { id } };
};

export const _getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'moscow' } },
      { params: { id: 'saint-petersburg' } },
      { params: { id: 'kazan' } },
      { params: { id: 'sochi' } },
      { params: { id: 'yekaterinburg' } },
    ],
    fallback: false,
  };
};

export default function DetailsPage({ id }: { id: string }) {
  return (
    <div className="h-full flex flex-col items-center">
      <WeatherInfo id={id} />
    </div>
  );
}
