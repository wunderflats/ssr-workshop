import React from "react";
import { renderMatches, matchRoutes, useLocation } from "react-router-dom";
import { routes } from "./routes";

const App: React.FC = () => {
  const location = useLocation();

  const matchedRoutes = matchRoutes(routes, location.pathname);

  return renderMatches(matchedRoutes);
};

export default App;
