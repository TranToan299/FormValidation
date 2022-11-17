import React, { Component } from "react";
import TableSinhVien from "./TableSinhVien";

export default class FormValidation extends Component {
  render() {
    return (
      <>
        <form className="container">
          <h2 className="title">Bài tập thêm sinh viên</h2>
          <div className="card">
            <div
              className="card-header bg-dark text-white"
              style={{ fontWeight: "bold", fontSize: "1.5rem" }}
            >
              Thông tin sinh viên
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <p>Mã SV</p>
                    <input name="maSV" className="form-control" />
                  </div>
                  <div className="form-group">
                    <p>Số điện thoại</p>
                    <input name="soDT" className="form-control" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <p>Họ và tên</p>
                    <input name="hoTen" className="form-control" />
                  </div>
                  <div className="form-group">
                    <p>Email</p>
                    <input name="email" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-success my-2">
                Thêm sinh viên
              </button>
            </div>
          </div>
        </form>
        <div className="table-sinhvien my-4">
          <TableSinhVien />
        </div>
      </>
    );
  }
}
