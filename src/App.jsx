import { useState, useEffect } from "react";
import React from "react";
import Editor from "./components/Editor";
import ReactDOMServer from "react-dom/server";
import useLocalStorage from "./assets/hooks/UseLocalStorage";
const App = () => {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);
    console.log(html);
    console.log(css);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <div className="flex min-w-[150px] p-4 bg-slate-300 pane top-pane  ">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onBeforeChange={setHtml}
        />

        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onBeforeChange={setCss}
        />

        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onBeforeChange={setJs}
        />
      </div>
      {/* top pane done */}
      <div className="  bg-yellow-300 flex h-[50vh] pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts allow-popups allow-same-origin allow-modals"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
};

export default App;
