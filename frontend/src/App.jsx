import React from "react";

function App() {
  const [msg, setMsg] = React.useState("");

  React.useEffect(() => {
    fetch("/api/hello")
      .then(res => res.json())
      .then(data => setMsg(data.msg));
  }, []);

  return (
    <div style={{ fontFamily: "Arial", padding: "40px" }}>
      <h1>Supplier Hunter 👕</h1>
      <p>{msg || "Carregando API..."}</p>
    </div>
  );
}

export default App;
