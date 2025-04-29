export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    redirect: {
      permanent: false, // 301 रीडायरेक्ट के लिए `true` करें
      destination: 'https://majhiladkibahin.in/', // ✅ पूरा URL दें
    },
  };
};
