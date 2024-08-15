import React from "react";
import LinkItem from "@theme/Footer/LinkItem";
import type { Props } from "@theme/Footer/Links/MultiColumn";

type ColumnType = Props["columns"][number];
type ColumnItemType = ColumnType["items"][number];

function ColumnLinkItem({ item }: { item: ColumnItemType }) {
  return item.html ? (
    <li
      className="footer__item"
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: item.html }}
    />
  ) : (
    <LinkItem item={item} />
  );
}

function Column({ column }: { column: ColumnType }) {
  return (
    <div className="flex flex-col">
      <h6 className="footer-title">{column.title}</h6>
      {column.items.map((item, i) => (
        <ColumnLinkItem key={i} item={item} />
      ))}
    </div>
  );
}

export default function FooterLinksMultiColumn({ columns }: Props): JSX.Element {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between">
      {columns.map((column, i) => (
        <Column key={i} column={column} />
      ))}
    </div>
  );
}
