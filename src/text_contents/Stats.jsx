import st from "./Stats.module.css";

export default function Stats({ header, text, image, o }) {
  return (
    <div className={st.text_cont}>
      <h2 style={{ order: 2 }}>{header}</h2>
      <p style={{ order: 3 }}>{text}</p>
      <img src={image} alt="some image" style={{ order: o }} />
    </div>
  );
}
