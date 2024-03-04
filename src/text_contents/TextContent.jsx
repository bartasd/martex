import style from "./TextContent.module.css";
import style2 from "./TextContent2.module.css";

export default function TextContent({ header, text, st }) {
  const styliukas = st ? style2 : style;

  return (
    <div className={styliukas.text_cont}>
      <h1>{header}</h1>
      <p>{text}</p>
    </div>
  );
}
