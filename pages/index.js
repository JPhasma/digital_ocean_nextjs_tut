import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home({ posts }) {
  console.log('I am on the client');

  return (
    <div>
      {/* loop over the posts and show them */}
      {posts &&
        posts.map((post) => (
          <Link href={`/${post.Slug}`} key={post.id}>
            <a>
              <h2>{post.Title}</h2>
              <p>{post.Content}</p>
              <p>
                <small>
                  {post.Slug} by {post.User.username}
                </small>
              </p>
            </a>
          </Link>
        ))}
    </div>
  );
}

export async function getStaticProps() {
  // console.log('I am on the server');

  // get posts from our api
  const res = await fetch('http://localhost:1337/posts');

  const posts = await res.json();

  // console.log(posts);

  return {
    props: { posts },
  };
}
