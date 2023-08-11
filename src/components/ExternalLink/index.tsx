import { ExternalLinkContainer } from "./styles";

interface ExternalLinkProps {
  text: string;
}

export function ExternalLink({ text }: ExternalLinkProps) {
  return <ExternalLinkContainer>{text}</ExternalLinkContainer>;
}
