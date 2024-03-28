"use client";
export default function ErrorBoundary({ error }: { error: any }) {
  return (
    <>
      <section className="text-center flex items-center justify-center h-screen">
        <p className="text-xl text-pink-600">{error.message}</p>
      </section>
    </>
  );
}
