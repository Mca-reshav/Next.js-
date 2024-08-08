import { Metadata } from 'next';

// Optional: Define metadata for the page
export const metadata: Metadata = {
  title: 'Server-Side Rendered Page',
  description: 'This page is rendered on the server.',
};

// Fetch data on the server side
export default async function SSRPage() {
  const data = {
    title: 'Next Js: Server-Side Rendered Page',
    description: 'This page is rendered on the server with fresh data every time.',
    timestamp: new Date().toISOString(),
  };

  return (
    <div style={{ padding: '20px',fontFamily: 'sans-serif'}}>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p>Current Time (Server-Side): {data.timestamp}</p>
    </div>
  );
}
