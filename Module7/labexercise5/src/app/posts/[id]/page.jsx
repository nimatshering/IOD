import Link from "next/link";
import styles from "../../page.module.css";
import Button from "@mui/material/Button";

async function getPostData(id) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/" + "posts/" + id
  );
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch post #" + id);
  }
  return res.json();
}

// Uses params prop to get value of [id] from path segment
export default async function Post({ params }) {
  // so for /posts/3/, params will be { id:3 }
  const post = await getPostData(params.id);
  return (
    <>
      <div className={styles.page}>
        <main className={styles.main}>
          <div className="post">
            {post ? (
              <>
                <img
                  src="https://placehold.co/400"
                  alt="Post illustration"
                  style={{ width: "100%", height: "40vh", objectFit: "cover" }}
                />
                <h3>
                  Post #{post.id}: {post.title}
                </h3>
                <p>{post.body}</p>
              </>
            ) : (
              "Loading ..."
            )}
          </div>

          <Link href="/posts" passHref>
            <Button variant="outlined">Show All Posts</Button>
          </Link>
        </main>
        <footer className={styles.footer}>copyright@2025</footer>
      </div>
    </>
  );
}
