import { use } from "react";
import Post from "./Post";

export default function Posts({postsPromise}){
    console.log(postsPromise);

    const posts = use(postsPromise)
    console.log(posts)

    return (
        <div className="users">
            <h2>All posts are here: {posts.length} </h2>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    )
}