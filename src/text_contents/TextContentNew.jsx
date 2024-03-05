import style1 from "../text_content_styles/TextContentNew.module.css";

export default function TextContentNew({ texts, st }) {
  let newStyle = "";

  if (st === 1) {
    newStyle = style1;
  }

  return (
    <div className={newStyle.container}>
      {Object.keys(texts).map((key) => {
        if (key.startsWith("header2")) {
          return <h2>{texts[key]}</h2>;
        }
        if (key.startsWith("para")) {
          return <p>{texts[key]}</p>;
        }
        if (key === "li") {
          return (
            <ul>
              {texts[key].map((li) => (
                <li>{li}</li>
              ))}
            </ul>
          );
        }
        if (key === "button") {
          return (
            <a href="#" className={newStyle.button}>
              {texts[key]}
            </a>
          );
        }
        return null;
      })}
    </div>
  );
}
