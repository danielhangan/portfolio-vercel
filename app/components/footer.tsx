// import Icon from "./icon";

type SocialType = {
  id: string;
  label: string;
  url: string;
  // icon: IconProps["name"];
  icon: any;
};

const socials: SocialType[] = [
  {
    id: "mail",
    label: "Mail",
    url: "mailto:hangandaniel1@gmail.com",
    icon: "mail",
  },
  {
    id: "twitter",
    label: "Twitter",
    url: "https://twitter.com/hangandaniel",
    icon: "twitter",
  },
  {
    id: "github",
    label: "Github",
    url: "https://github.com/danielhangan",
    icon: "github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/in/danielhangan",
    icon: "linkedin",
  },
];

export default function Footer() {
  return (
    <footer className="mb-16">
      <div className="flex flex-row gap-x-4 items-center">
        <p>Find me on</p>
        <ul className="font-sm flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
          {socials.map((social) => (
            <li key={social.id}>
              <a
                className="flex  justify-start items-center gap-x-2 transition-all"
                rel="noopener noreferrer"
                target="_blank"
                href={social.url}
              >
                <p>{social.label}</p>
                {/* <Icon name={social.icon} size={24} /> */}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
