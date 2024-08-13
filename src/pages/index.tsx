import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="hero bg-base-200 min-h-fit">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold">{siteConfig.title}</h1>
          <p className="py-6 text-lg">
            <span className="font-bold">Job queuing</span> and <span className="font-bold">task scheduling</span> library <br /> for{" "}
            <span className="font-bold">Node.js</span> and <span className="font-bold">JavaScript </span> <br />
            built on <span className="font-bold">PostgreSQL</span>
          </p>
          <Link className="btn btn-primary" to="/docs/intro">
            Get Started
          </Link>
        </div>

        <img src="/img/pidginmq.png" className="max-w-sm rounded-lg" />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="PidginMQ is a job queuing and task scheduling library for Node.js and JavaScript, built on PostgreSQL">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
