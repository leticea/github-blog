import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/leticea.png" />

      <ProfileDetails>
        <header>
          <h1>Letícia Nascimento</h1>
          <ExternalLink text="Github" href="#" />
        </header>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            leticea
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Rocketseat
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            123
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  );
}
