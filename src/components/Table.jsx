import React from "react";

export default function Table({ data, heading }) {
  return (
    <section className="tarakimu">
      <h3 className="tarakimu__heading">{heading}</h3>
      <table className="table">
        <thead>
          <tr>
            <th className="heading">Tarakimu</th>
            <th className="heading">Neno</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.digit}</td>
              <td>{item.word}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
