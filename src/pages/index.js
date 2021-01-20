import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I am Sérgio Cipriano, software engineering
          student from UnB. I currently study optimization,
          supervised by John Lenon Cardoso Gardenghi. I spend
          most of my day contributing to free software, studying
          new languages, frameworks and creating new ones too.
        </p>
      </section>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
      >
        <h2 className={utilStyles.headingLg}>Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              <img
                src={`/images/posts/${id}.jpeg`}
                alt="post"
                className={utilStyles.image}
              />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
