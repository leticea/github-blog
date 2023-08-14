import { useCallback, useState } from "react";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { PostsListContainer } from "./styles";

interface IPost {
  title: string;
}

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);

  const getPosts = useCallback(async () => {
    try {
    } finally {
    }
  }, [posts]);

  return (
    <>
      <Profile />
      <SearchInput />
      <PostsListContainer>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostsListContainer>
    </>
  );
}
