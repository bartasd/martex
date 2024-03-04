import style from "./Hmm.module.css";

export default function Hmm1({ first, header, text, header2, text21, text22 }) {
  return (
    <div className={style.text_cont}>
      <p className={style.boldP}>{first}</p>
      <h1>{header}</h1>
      <p>{text}</p>
      <h2>{header2}</h2>
      <ul>
        <li>{text21}</li>
        <li>{text22}</li>
      </ul>
    </div>
  );
}
