import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { GraphQLClient, gql } from 'graphql-request';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    // Redirect all traffic to majhiladkibahin.in
    return {
        redirect: {
            permanent: false,
            destination: 'http://majhiladkibahin.in/',
        },
    };

    // The rest of your existing code can remain commented or removed
    // since we're redirecting all requests
};

// Empty component since we're redirecting
const Post: React.FC = () => {
    return null;
};

export default Post;
