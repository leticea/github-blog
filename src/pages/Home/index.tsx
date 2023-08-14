import { useCallback, useEffect, useState } from "react";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { PostsListContainer } from "./styles";
import { api } from "../../lib/axios";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

interface IPost {
  title: string;
}

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);

  const getPosts = useCallback(
    async (query: string = "") => {
      try {
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${repoName}`
        );
        console.log(response.data);
        setPosts(response.data.items);
      } finally {
      }
    },
    [posts]
  );

  useEffect(() => {
    getPosts();
  }, []);

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
