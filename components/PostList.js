import Post from "./Post";

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((element) => (
        <div className="m-3 w-auto" key={element._id}>
          <Post
            id={element._id}
            author={element.name}
            title={element.title}
            subtitle={element.subtitle}
            body={element.body.substring(0, 200) + "..."}
            createdAt={element.createdAt}
            updatedAt={element.updatedAt}
          />
        </div>
      ))}
    </div>
  );
};

export default PostList;
