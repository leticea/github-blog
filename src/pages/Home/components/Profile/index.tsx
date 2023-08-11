import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/leticea.png" />

      <ProfileDetails>
        <header>
          <h1>Letícia Nascimento</h1>
          <ExternalLink text="Github" href="#" />
        </header>
      </ProfileDetails>
    </ProfileContainer>
  );
}
