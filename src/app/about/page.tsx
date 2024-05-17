export default function About() {
  return (
    <div>
      <section>
        <h1 className="text-2xl font-semibold mb-7"> Namaste there</h1>
        <article
          className="max-w-screen-xs prose prose-p:text-primary"
          aria-label="about me"
        >
          <p>
            I am a CS student from Nepal, and I am all about coding cool stuff
            for the web. Whether it is backend magic or frontend flair, I love
            diving into projects that feel like exciting adventures.
          </p>
          <p>
            I am always seeking new ways to enhance my skills and the projects I
            work on. Each new pursuit is like a little adventure, filled with
            challenges to overcome and occasional unexpected twists. Still
            loving every minute of it. I remain committed to learning and
            delivering quality work.
          </p>

          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <p>
            <span className="font-semibold">PS: </span>I Guess what? I have
            decided to start a blog! I will be sharing my IT knowledge and some
            fun stories about being a web developer. Stay tuned for some cool
            insights! 🚀
          </p>
        </article>
      </section>
    </div>
  );
}
