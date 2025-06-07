export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "English Alphabet Classifications using Hand Signs",
    year: 2025,
    description: "Developed a convolutional neural network model to classify alphabet from image of hand signs.This model was developed on American Sign Language Dataset.This model was developed as part of Pattern Recognition course project.",
    url: "https://github.com/anuragnatoo/PR_Projects/blob/main/AmericanSignLanguage_AlphabetClassification.ipynb",
  },
  {
    title: "Circuit Activity Factor Calculator",
    year: 2025,
    description: "Developed an application which calculates the activity factor of all the components of a circuit in python as part of VLSI System Design course project.Given the circuit verilog module(.v file) the application calculated the activity factor of all the components and also gave the structure of the input circuit. The application works for all the ISCAS85 benchmark files.",
    url: "https://github.com/anuragnatoo/ELE301P/tree/master/ActivityFactorCalculator",
  },
  {
    title: "Reddit Image Scrapper",
    year: 2025,
    description: "Developed a python script to scrape images from any sub reddit using PRAW. Can be used for data science projects for data fetching.",
    url: "https://github.com/anuragnatoo/RedditImageScraper",
  },
];
