import { Routes, Route } from "react-router-dom";
import RouteTs from "./route/Route";

function App() {
  return (
    <>
      {RouteTs.map((item) => {
        return (
          <Routes key={item.Key}>
            <Route path={item.Path} element={<item.Component />} />
          </Routes>
        );
      })}
    </>
  );
}

export default App;
