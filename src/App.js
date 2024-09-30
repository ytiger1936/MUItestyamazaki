import React from "react";
// MUIのButtonコンポーネントをインポート
import Button from "@mui/material/Button";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* MUIのボタンを追加 */}
      <Button variant="contained" color="primary">
        Click Me
      </Button>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
    </div>
  );
}
