import style from "./Logo_content.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Logo_content() {
  return (
    <div className={style.logo_text_cont}>
      <h1>Content is the key to building an audience</h1>
      <p>
        Mauris donec turpis suscipit sapien ociis sagittis sapien tempor a
        volute ligula and aliquet tortor
      </p>
      <a href="#" className={style.button}>
        Get started for free
      </a>
      <p>
        <FontAwesomeIcon icon={faCheck} /> No credit card needed, free 14-day
        trial
      </p>
    </div>
  );
}
