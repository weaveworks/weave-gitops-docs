import React from "react";
import Link from "@docusaurus/Link";

const containerStyle = {
  fontSize: 16,
  marginLeft: 4,
  fontVariant: "all-small-caps",
};

export default function TierLabel({ tiers }) {
  return (
    <Link
      to="/docs/enterprise/intro"
      title={`This feature is a available on ${tiers}`}
      style={containerStyle}
    >
      {tiers}
    </Link>
  );
}
