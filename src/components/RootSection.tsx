import React from "react";

export default function RootSection({
  children,
}: {
  children: React.ReactElement;
}) {
  return <div className="root-section">{children}</div>;
}
