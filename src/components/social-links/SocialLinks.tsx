import { IonIcon } from "@ionic/react";
import { FiInstagram, FiGithub, FiYoutube, FiLinkedin } from "react-icons/fi";

export function SocialLinks() {
  return (
    <>
      <ul>
        <li>
          <a href="https://github.com/DiguyaDeveloper" target="_blank">
            Ver meu portifólio
          </a>
        </li>
        <li>
          <a href="https://rocketseat.com.br/explorer" target="_blank">
            Conheça o Explorer
          </a>
        </li>
      </ul>
      <div id="social-links">
        <a href="https://github.com/diguyadeveloper" target="_blank">
          <FiGithub />
        </a>

        <a href="https://www.instagram.com/idiguya/" target="_blank">
          <FiInstagram />
        </a>

        <a
          href="https://www.youtube.com/channel/UCaoU71r7Kfy7dvOz4U-v6ww"
          target="_blank"
        >
          <FiYoutube />
        </a>

        <a href="https://www.linkedin.com/in/diego-ceccon/" target="_blank">
          <FiLinkedin />
        </a>
      </div>
    </>
  );
}
