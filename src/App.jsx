import React, { useState } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { AnimatePresence } from "framer-motion";

import { ScrollProvider } from "./helpers/scrollProvider";
import Home from "./pages/Home/Home";
import { Loader } from "./components/Loader/Loader";
import classNames from "classnames";

const queryC = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryC}>
      <main className="main">
        <ScrollProvider>
          <AnimatePresence mode="wait" initial={false}>
            <Home />
          </AnimatePresence>
        </ScrollProvider>
      </main>
    </QueryClientProvider>
  );
}

export default App;
