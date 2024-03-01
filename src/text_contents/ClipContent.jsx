import style from "./ClipContent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ClipContent({ icon, header, text }) {
  return (
    <div className={style.clip_cont_out}>
      <div className={style.clip_cont_in}>
        <FontAwesomeIcon className={style.icon} icon={icon} />
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M69.8,-23C76.3,-2.7,57.6,25.4,32.9,42.8C8.1,60.3,-22.7,67,-39.1,54.8C-55.5,42.7,-57.5,11.7,-48.6,-11.9C-39.7,-35.5,-19.8,-51.7,5.9,-53.6C31.7,-55.6,63.3,-43.2,69.8,-23Z"
            transform="translate(100 100)"
            fill="#feecf2"
          ></path>
        </svg>
      </div>
      <h1>{header}</h1>
      <p>{text}</p>
    </div>
  );
}
