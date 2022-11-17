import React, { Component } from "react";

export default class TableSinhVien extends Component {
  render() {
    return (
      <div className="container">
        <table className="table text-center">
          <thead className="bg-dark text-white">
            <tr>
              <th>Mã SV</th>
              <th>Họ tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Nguyễn Văn A</td>
              <td>0123465798</td>
              <td>acb@gmail.com</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
