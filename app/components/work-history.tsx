import Link from "next/link";
import workData from "app/lib/work.json";

export function WorkHistory() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Work</h2>
      {workData
        .sort((a, b) => b.startYear - a.startYear)
        .map((job) => (
          <div key={job.company} className="mb-8">
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-1">
              {job.startYear} - {job.endYear}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100">
              <span className="font-medium">{job.title}</span>{" "}
              <span className="text-neutral-500 dark:text-neutral-400">@</span>{" "}
              <a
                href={job.companyWebsite}
                className="font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {job.company}
              </a>{" "}
              {job.description && (
                <>
                  <span className="text-neutral-500 dark:text-neutral-400">
                    -
                  </span>{" "}
                  <span className="text-neutral-600 dark:text-neutral-400">
                    {job.description}
                  </span>
                </>
              )}
            </p>
          </div>
        ))}
    </div>
  );
}
