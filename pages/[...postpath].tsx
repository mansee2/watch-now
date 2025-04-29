import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Force redirect ALL traffic to majhiladkibahin.in
  return {
    redirect: {
      permanent: false, // Set to true if this is a permanent redirect (HTTP 301)
      destination: 'http://majhiladkibahin.in/',
    },
  };
};

// Empty component (not needed since we're redirecting)
export default function Redirect() {
  return null;
}
