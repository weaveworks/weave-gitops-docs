import React from "react";
import Link from "@docusaurus/Link";
import useGlobalData from "@docusaurus/useGlobalData";

const containerStyle = {
  fontSize: 16,
  marginLeft: 4,
  fontVariant: "all-small-caps",
};

const getCurrentVersionPath = () => {
  const { "docusaurus-plugin-content-docs": data } = useGlobalData();
  const currentVersion = data?.default?.versions?.find(
    (v) => v.name === "current"
  );
  // Fallback to /docs just in case. Not sure if this is async etc.
  return currentVersion?.path || "/docs";
};

export default function TierLabel({ tiers }) {
  return (
    <Link
      to={`${getCurrentVersionPath()}/enterprise/intro`}
      title={`This feature is a available on ${tiers}`}
      style={containerStyle}
    >
      {tiers}
    </Link>
  );
}
