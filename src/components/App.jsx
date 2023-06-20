import { StyledComponent } from "components/StyledComponent/StyledComponent";
import data from "data/data";

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: "flex",
        flexDirection: "column",
        gap: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
        // fontSize: 40,
        // color: '#010101',
      }}
    >
      <StyledComponent title="Upload stats" stats={data} />
    </div>
  );
};
