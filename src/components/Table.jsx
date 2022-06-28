import React from "react";

export default function Table({
  data,
  heading,
  leftTableHeading,
  rightTableHeading,
}) {
  return (
    <section>
      <h3 className="tarakimu__heading">{heading}</h3>
      <table className="table">
        <thead>
          <tr>
            <th className="heading table__heading">{leftTableHeading}</th>
            <th className="heading table__heading">{rightTableHeading}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item[leftTableHeading]}>
              <td>{item[leftTableHeading.toLowerCase()]}</td>
              <td>{item[rightTableHeading.toLowerCase()]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
