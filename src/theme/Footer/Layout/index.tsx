import React from "react";
import type { Props } from "@theme/Footer/Layout";

export default function FooterLayout({ links, copyright }: Props): JSX.Element {
  return (
    <>
      <footer className="footer bg-neutral text-neutral-content p-10">{links}</footer>
      {copyright && <footer className="footer footer-center bg-neutral text-neutral-content p-4">{copyright}</footer>}
    </>
  );
}
