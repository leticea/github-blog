import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { PostContentContainer } from "./styles";

interface PostContentProps {
  content: string;
}

export function PostContent({ content }: PostContentProps) {
  return (
    <PostContentContainer>
      <ReactMarkdown children={content} />
    </PostContentContainer>
  );
}
