function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

const socials = [
  {
    id: "mail",
    label: "Mail",
    url: "mailto:hangandaniel1@gmail.com",
  },
  {
    id: "twitter",
    label: "Twitter",
    url: "https://twitter.com/hangandaniel",
  },
  {
    id: "github",
    label: "Github",
    url: "https://github.com/danielhangan",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/in/danielhangan",
  },
];

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        {socials.map((social) => (
          <li key={social.id} tw="group">
            <a
              className="flex bg-neutral-100 rounded-xl pr-2 justify-start items-center gap-x-1 transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href={social.url}
            >
              <p className="ml-2 h-7">{social.label}</p>
              <ArrowIcon />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
