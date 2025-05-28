import Image from "next/image";

const ComingSoon = () => {
  return (
    <main className="relative flex flex-col gap-6 min-[1400px]:container">
      <article className="max-h-full max-w-[500px] w-full flex-auto mx-auto flex flex-col items-center justify-center gap-4 py-8 px-10 text-center">
        <Image
          src="/images/993-podcast.jpg"
          width={200}
          height={200}
          className="max-w-[200px] mb-2"
          alt="Comming soon..."
        />

        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-brand">
          Coming Soon
        </h1>
        <p className="text-muted-foreground md:text-base">
          We&apos;re working hard to bring you something amazing. Stay tuned for
          the launch!
        </p>
      </article>
    </main>
  );
};
export default ComingSoon;
