import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Main } from "./components/Main";

import { HomePage } from "./pages/HomePage";
import { Details } from "./pages/Details";
import { NotFound } from "./pages/NotFound";

import { Provider } from "react-redux";
import { persistor, store } from "./store/index";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header />
        <Main>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/country/:name" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Main>
      </PersistGate>
    </Provider>
  );
}

export default App;
