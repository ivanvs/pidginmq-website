import Heading from "@theme/Heading";
import { FaRegClock } from "react-icons/fa";
import { FaStopwatch20 } from "react-icons/fa";
import { FaRedoAlt } from "react-icons/fa";
import { RiRestTimeLine } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";

type FeatureItem = {
  title: string;
  icon: JSX.Element;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Delayed Jobs",
    icon: <FaRegClock className="h-24 w-24" />,
    description: <>Allow tasks to be scheduled for execution at a specified future time, enabling precise control over task timing and resource management.</>,
  },
  {
    title: "Cron Jobs",
    icon: <FaStopwatch20 className="h-24 w-24" />,
    description: <>Enable you to schedule recurring tasks at specific intervals, similar to traditional cron jobs in Unix-based systems.</>,
  },
  {
    title: "Automatic retries",
    icon: <FaRedoAlt className="h-24 w-24" />,
    description: (
      <>
        Ensure that failed tasks are automatically reattempted after a specified delay, improving reliability by handling transient errors without manual
        intervention.
      </>
    ),
  },
  {
    title: "Configurable Job Timeouts",
    icon: <RiRestTimeLine className="h-24 w-24" />,
    description: (
      <>
        Allow you to set specific time limits for task execution, automatically terminating jobs that exceed the allotted time to prevent resource hogging and
        ensure system stability.
      </>
    ),
  },
  {
    title: "Direct Table Access",
    icon: <FaDatabase className="h-24 w-24" />,
    description: <>Allows users to interact directly with the underlying database tables, enabling advanced querying and custom reporting.</>,
  },
  {
    title: "Prioritization",
    icon: <GiSettingsKnobs className="h-24 w-24" />,
    description: (
      <>
        Assign different priority levels to tasks, ensuring that critical jobs are processed before less important ones, optimizing resource allocation and
        improving system efficiency..
      </>
    ),
  },
];

function Feature({ title, icon, description }: FeatureItem) {
  return (
    <div className="flex-col md:basis-1/3 py-4">
      <div className="text--center">{icon}</div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section>
      <div className="container">
        <div className="flex flex-row flex-wrap">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
