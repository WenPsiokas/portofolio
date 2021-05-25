import React from "react";
import data from '../data/tableOneData.json';

const Table = () => {
  return (
    <div>
      <table class="ui celled table">
        <thead>
          <tr>
            <th>{data.headers[0]}</th>
            <th>{data.headers[1]}</th>
            <th>{data.headers[2]}</th>
          </tr>
        </thead>
        <tbody>
          {data.cells.map((item, i) => (
            <tr key={i}>
              <td data-label="Name">{item.name}</td>
              <td data-label="Age">{item.age}</td>
              <td data-label="Role">{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
