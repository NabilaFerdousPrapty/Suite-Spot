// pages/_error.tsx
import { NextPageContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';

interface ErrorProps {
  statusCode?: number;
}

function Error({ statusCode }: ErrorProps) {
  return (
    <>
      <Head>
        <title>{statusCode ? `${statusCode} Error` : 'Error'}</title>
      </Head>
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-6 max-w-lg bg-white rounded-lg shadow-md">
          <h1 className="text-6xl font-bold text-red-500">
            {statusCode || 'Error'}
          </h1>
          <p className="text-2xl mt-4">
            {statusCode
              ? `Oops! Something went wrong (${statusCode}).`
              : 'An unexpected error has occurred.'}
          </p>
          <Link href="/" className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Go Home
          </Link>
        </div>
      </main>
    </>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
