// app/posts/page.jsx
import Link from "next/link";
import styles from "../page.module.css";
import { Grid } from "@mui/material";
import PostCard from "../../components/PostCard";
// Fetch posts from API
async function getPostsData(limit, page = 1) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

export default async function Posts() {
  const posts = await getPostsData(5);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="Posts">
          <h1>Posts</h1>
          <Grid container spacing={2}>
            {posts.map((post) => (
              <Grid item xs={12} sm={6} md={3} key={post.id}>
                {post && (
                  <Link
                    href={`/posts/${post.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <PostCard title={post.title}>
                      {post.body.slice(0, 80)}...
                    </PostCard>
                  </Link>
                )}
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
      <footer className={styles.footer}>© 2025</footer>
    </div>
  );
}
