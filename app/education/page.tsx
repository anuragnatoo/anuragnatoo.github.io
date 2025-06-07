import Link from "next/link";
import type { Metadata } from "next";
import { educationList } from "./education-data";

export const metadata: Metadata = {
  title: "Education",
  description: "My Education",
};

export default function Education() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Projects</h1>
      <div>
        {educationList.map((project, index) => (
          <Link
            key={index}
            href={project.url}
            className="flex flex-col space-y-1 mb-8 transition-opacity duration-200 hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full flex flex-col items-start space-y-1">
              <h2 className="text-black dark:text-white font-bold">{project.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
