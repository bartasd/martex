import style from "./TextContent.module.css";

export default function TextContent({ header, text }) {
  return (
    <div className={style.text_cont}>
      <h1>{header}</h1>
      <p>{text}</p>
    </div>
  );
}
