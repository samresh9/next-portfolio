export default function About (){
    return (
      <div>
        <section>
          <h1 className="text-2xl font-semibold mb-7">Hi there👋</h1>
          <article
            className="max-w-screen-xs prose prose-p:text-primary"
            aria-label="about me"
          >
            <p>
              I am a web developer with a knack for building interesting things
              on the internet
            </p>
            <p>
              I am always seeking new ways to enhance my skills and the projects
              I work on. Each new pursuit is like a little adventure, filled
              with challenges to overcome and occasional unexpected twists.
              Still loving every minute of it. I remain committed to learning
              and delivering quality work.
            </p>

            <p>
              Besides coding, you can also find me on the street running or in
              the gym.
            </p>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <p>
              <span className="font-semibold">PS: </span>I have recently decided
              to create a blog. I will be sharing my knowledge on IT related
              topics and some of my challenges as a web developoer, hoping to
              provide helpful information and some insights. Not only that but
              also to elevate my own understanding to a more profound level.
            </p>
          </article>
        </section>
      </div>
    );
}
