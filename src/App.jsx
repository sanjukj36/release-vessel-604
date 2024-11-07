import "./App.css";
import { useEffect, useRef, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Header } from "@/components/partials/header";
import { Sidebar } from "@/components/partials/Sidebar";
import { urls } from "@/url/url";

function App() {
  // TODO: Remove this after INF verification
  const firstMount = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!firstMount.current) {
      navigate("/inf-module");
      firstMount.current = true;
    }
  }, []);
  return (
    <div className="w-full h-screen overflow-x-hidden bg-background flex flex-col">
      <Header />
      <div className="w-full h-full grid grid-cols-[auto_100px]">
        <div className="flex w-full h-full">
          <Routes>
            {urls.map((item, key) => (
              <Route key={key} path={item?.url} element={item?.element}>
                {item?.sub?.map((subItem, subKey) => (
                  <Route
                    key={subKey}
                    path={subItem?.url}
                    element={subItem?.element}
                  />
                ))}
              </Route>
            ))}
          </Routes>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
