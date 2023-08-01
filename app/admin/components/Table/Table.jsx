"use client";

import { motion } from "framer-motion";
import "./table.scss";

const Table = ({ headings, rows }) => {
  console.log("rows:", rows);
  return (
    <motion.table
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="table"
    >
      <thead>
        <tr align="left" className="header-row">
          {headings &&
            headings.map((heading, key) => (
              <th key={key} className="header-cell">
                {heading}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {rows &&
          rows.map((row, key) => (
            <tr
              key={key}
              className="group even:bg-toolight-border-gray-light/10 transition"
            >
              {row &&
                row.map((cell, key) => (
                  <td
                    key={key}
                    className="first:pl-4 py-4 last:pr-4 group-last:border-none border-b border-toolight-border-gray-light"
                  >
                    {cell}
                  </td>
                ))}
            </tr>
          ))}
      </tbody>
    </motion.table>
  );
};

export default Table;
