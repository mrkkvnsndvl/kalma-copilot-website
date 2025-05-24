const DemoSection = () => {
  return (
    <section
      className="py-24 md:pb-32 lg:pb-36 lg:pt-32 dark:bg-transparent"
      id="demo"
    >
      <div className="container px-6 mx-auto max-w-7xl sm:px-10 lg:px-16 xl:px-20">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="text-3xl font-semibold text-balance lg:text-4xl">
            How to Set Up Kalma Copilot
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400">
            Follow along with our interactive guide to learn how to quickly and
            easily set up Kalma Copilot for your interview preparation.
          </p>
        </div>
        <div className="relative box-content max-h-[80vh] max-sh-[80svh] w-full aspect-video py-10">
          <iframe
            src="https://app.supademo.com/embed/cmb1tsmmn0128xm0hsg0sneos?embed_v=2"
            loading="lazy"
            title="Kalma Copilot Setup Guide"
            allow="clipboard-write"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
