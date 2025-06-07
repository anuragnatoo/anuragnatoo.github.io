import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      {/* <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a> */}
      <h1 className="mb-8 text-2xl font-medium">
        Hey there!
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm a Computer Science graduate from IIITDM Kancheepuram with a strong foundation in programming and software development.
        </p>
        <p>
          I have experience working with a variety of programming languages including C, C++, Python,Typescript, Apex, and JavaScript.
        </p>
        <p>
          As part of my undergraduate project, I worked on Image Sentiment Analysis, which deepened my understanding of computer vision and machine learning techniques.
        </p>
        <p>
          My academic background has equipped me with solid knowledge in core computer science areas, particularly Software Engineering and Machine Learning.
        </p>
        <p>
          Built and maintained by{" "}
          <a href="https://www.linkedin.com/in/anuragnatoo/" target="_blank">
            Anurag Natoo
          </a>
          .
        </p>
      </div>
    </section>
  );
}
