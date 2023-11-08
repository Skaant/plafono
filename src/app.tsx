import * as React from "react";
import { createRoot } from "react-dom/client";
import Root from "./components/Root";

const rootAnchorId = "plafono-app";
const rootElement = document.getElementById(rootAnchorId);

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<Root />);
} else throw new Error(`Anchor element "${rootAnchorId}" not found`);
