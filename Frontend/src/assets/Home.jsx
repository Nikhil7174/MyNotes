import Notes from "./Notes";

export default function Home(props) {
  const { showAlert } = props;
  return (
    <div style={{ position: "inherit" }}>
      <Notes showAlert={showAlert} />
    </div>
  );
}
