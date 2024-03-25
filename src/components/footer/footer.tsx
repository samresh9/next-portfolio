import Link from "next/link";
import { Container } from "../container/Container";
import { GithubIcon, LinkedInIcon } from "@/components/icons/Icons";

const paths = [
  //   { name: "Terms of Service (in Progress)", href: "#" },
  //   { name: "Privacy (in Progress)", href: "#" },
  { name: "About", href: "/about" },
];
export const Footer = () => {
  return (
    <footer className="border-t-1 py-14 pb-14 text-small">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between gap-10">
          <SectionLinks />
          <Aside />
        </div>
        <Rights />
      </Container>
    </footer>
  );
};

export const SectionLinks = () => {
  return (
    <section>
      <div className="md:flex gap-56">
        {/* Title */}
        <div>
          <h3 className="text-xl sm:text-2xl mb-3 font-bold">Lorem Ipsum</h3>

          <div className="flex gap-2 items-center mb-10">
            <Link
              href="https://github.com/Samresh9"
              target="_blank"
              rel="git"
            >
              <GithubIcon />
            </Link>
            <Link
              href="https://github.com/Samresh9"
              target="_blank"
              rel="linkedin"
            >
              <LinkedInIcon />
            </Link>
          </div>
        </div>

        {/* Col 1 */}
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl mb-3 font-bold">Links</h3>
          <ul className="flex flex-col gap-3">
            {paths.map((p) => (
              <li key={p.name}>
                <Link
                  href={p.href}
                  className="border-b-1 border-transparent hover:border-foreground transition-all"
                  scroll={true}
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export const Aside = () => {
  return (
    <aside>
      <h3 className="text-2xl mb-3 font-bold">Connect with me</h3>

      <Link
        href="mailto:thapasamresh9@gmail.com"
        className="hover:text-pink-700 transition-all"
      >
        <div className="flex gap-2 mb-5">lorem@gmail.com</div>
      </Link>
    </aside>
  );
};

export const Rights = () => {
  return (
    <div className="text-small mt-10">
      &copy; {new Date().getFullYear()} samresh. All Rights Reserved
    </div>
  );
};
