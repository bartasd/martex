import style from "./Hmm.module.css";

export default function Hmm2({
  header21,
  header22,
  text1,
  text2,
  text21,
  text22,
}) {
  return (
    <div className={style.text_cont}>
      <h2>{header21}</h2>
      <p>{text1}</p>
      <h2>{header22}</h2>
      <p>{text2}</p>
      <ul>
        <li>{text21}</li>
        <li>{text22}</li>
      </ul>
    </div>
  );
}
