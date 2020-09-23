import Head from 'next/head';

// import { PostData, loadBlogPosts, loadMarkdownFile } from '../loader';
import { PostData, loadBlogPosts } from '../loader';
import { PostCard } from '../components/PostCard';
import { generateRSS } from '../rssUtil';
// import { Markdown } from '../components/Markdown';
// import { config } from '../globals';

const sectionStyle = {
  width: '100%',
  padding: '100px 3vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
} as const;

// const pStyle = { lineHeight: 1.7 };

const Home = (props: {
  // introduction: string;
  // features: string;
  // readme: string;
  posts: PostData[];
}) => {
  return (
    <div style={{ width: '100%' }}>
      <Head>
        <title>Introducing Devii</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div style={{ maxWidth: '550px', margin: 'auto', padding: '50px 3vw' }}>
        <Markdown source={props.introduction} />
      </div> */}
      <div style={sectionStyle}>
        <h2 style={{ margin: '4px 0px', fontSize: '34pt' }}>Features</h2>
        {/* <div style={{ maxWidth: '550px' }}>
          <Markdown source={props.features} />
        </div> */}
      </div>
      <div style={sectionStyle}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit, minmax(300px,1fr))`,
            gridRowGap: '8px',
            gridColumnGap: '8px',
            width: '100%',
            padding: '0px 7vw',
          }}
        >
          {props.posts.map((post, j) => {
            return <PostCard post={post} key={j} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;

export const getStaticProps = async () => {
  // const introduction = await loadMarkdownFile('introduction.md');
  // const features = await loadMarkdownFile('features.md');
  // const readmeFile = await import(`../${'README.md'}`);
  // const readme = readmeFile.default;

  const posts = await loadBlogPosts();

  // comment out to turn off RSS generation
  // during build step.
  await generateRSS(posts);
  
  // const props = { introduction, features, readme, posts };
  const props = { posts };
  return { props };
};
