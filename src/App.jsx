import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "@/components/partials/header";
import { Sidebar } from "@/components/partials/Sidebar";
import { hideUrls, urls } from "@/url/url";
import { SecondNavigation } from "./components/partials/second-navigation";

function App() {
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
            {hideUrls.map((item, key) => (
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
      <SecondNavigation />
    </div>
  );
}

export default App;
