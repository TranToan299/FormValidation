import React, { Component } from "react";

export default class TableSinhVien extends Component {
  renderSinhVien = (arr) => {
    return arr.map((sv, index) => {
      return (
        <tr key={index}>
          <td>{sv.maSV}</td>
          <td>{sv.hoTen}</td>
          <td>{sv.soDT}</td>
          <td>{sv.email}</td>
          <td>
            <button className="btn btn-success">
            <i class="fa fa-trash-alt"></i>

            </button>
            <button className="btn btn-danger ms-3">

            <i class="fa fa-edit "></i>
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    let { arr } = this.props;
    console.log(arr);
    return (
      <div className="">
        <table className="table text-center"  style={{
        overflow:'scroll'
      }}>
          <thead className="bg-dark text-white">
            <tr>
              <th>Mã SV</th>
              <th>Họ tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderSinhVien(arr)}</tbody>
        </table>
      </div>
    );
  }
}
