export default function Post({post}){
    return (
        <div className="users">
            <p>userId: {post.userId} </p>
            <p>Title: {post.title} </p>
        </div>
    )
}