import React, { Component } from "react";
import TableSinhVien from "./TableSinhVien";

export default class FormValidation extends Component {
  state = {
    formValue: {
      maSV: "",
      soDT: "",
      hoTen: "",
      email: "",
    },

    formError: {
      maSV: "",
      soDT: "",
      hoTen: "",
      email: "",
    },
    valid:false,
    arrSinhVien: [
      {   maSV: "1",
      soDT: "1",
      hoTen: "Toan",
      email: "123@gmail.com",
      }
    ]

  };

  handleUpdate = () => {
    let {formValue,arrSinhVien} = this.state;
    let svUpdate = arrSinhVien.find((sv)=>{
      return sv.maSV === formValue.maSV
    })
    if( svUpdate) {
      for (let key in svUpdate){
        if (
          key !== 'maSV'
        ) {

          svUpdate[key] = formValue[key]
        }
      }
    }
    console.log(svUpdate, arrSinhVien)
    this.setState({
      arrSinhVien:arrSinhVien,
      formValue: 
      {maSV: "",
      soDT: "",
      hoTen: "",
      email: "",}
    })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    if(!this.checkValid()){
      alert("Form không hợp lệ");
      return;
    }
    let arrSinhVien = this.state.arrSinhVien;
    arrSinhVien.push({...this.state.formValue})
    this.setState({arrSinhVien: arrSinhVien});
    console.log(this.state.arrSinhVien)
  };
  
  checkValid = () => {
    let {formError,formValue}= this.state;
    for (let key in formError) {
      if(formError[key] !== '' || formValue[key] === '' ){
        return false;
      }
    }
    return true;
}

  handleInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    let dataType = e.target.getAttribute("data-type");
    console.log(dataType);
    let newFormValue = this.state.formValue;
    // Validation
    let newFormError = this.state.formError;
    let message = "";
    if (value.trim() === "") {
      message = "không được để trống";
      newFormError[name] = message;
    } else {
      switch (dataType) {
        case "number":
          let regexNumber = /^-?\d+\.?\d*$/;
          if (!regexNumber.test(value)) {
            message = "is invalid";
          } else {
            message = "";
          }
          break;
        case "email":
          let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if (!regexEmail.test(value)) {
            message = "is invalid";
          } else {
            message = "";
          }
          break;
        default:
          message = "";
      }
    }
    console.log(dataType );
    newFormError[name] = message;
    // Lấy dữ liệu từ input set vào state
    newFormValue[name] = value;
    this.setState(
      {
        formValue: newFormValue,
        formError: newFormError,
      },
      () => {
        this.setState({
          valid: this.checkValid()
        });
      }
    );
  };

  handleDel = (sinhvienClick) => {
    let newArrSinhVien = this.state.arrSinhVien;
    let indexDel =  newArrSinhVien.findIndex((sv)=>{
      return sv.maSV === sinhvienClick 
    })
    newArrSinhVien.splice(indexDel,1)
    this.setState({
      arrSinhVien: newArrSinhVien,
    })

  }

  handleEdit = (sv) => {
    this.setState({
      formValue: sv
    })
  }

  render() {
    return (
      <div className="container">
        <form className="" onSubmit={this.handleSubmit}>
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
                    <input
                    value = {this.state.formValue.maSV}
                      name="maSV"
                      className="form-control"
                      data-type="number"
                      onInput={this.handleInput}
                    />
                    {this.state.formError.maSV ? (
                      <div
                        className="alert alert-danger mt-3"
                        style={{ padding: "10px 20px" }}
                      >{`Mã sinh viên ${this.state.formError.maSV}`}</div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-group">
                    <p>Số điện thoại</p>
                    <input
                    value ={this.state.formValue.soDT}
                      name="soDT"
                      className="form-control"
                      data-type="number"
                      onInput={this.handleInput}
                    />
                    {this.state.formError.soDT ? (
                      <div
                        className="alert alert-danger mt-3"
                        style={{ padding: "10px 20px" }}
                      >{`Số điện thoại ${this.state.formError.soDT}`}</div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <p>Họ và tên</p>
                    <input value= {this.state.formValue.hoTen}
                    data-type="text" 
                      name="hoTen"
                      className="form-control"
                      onInput={this.handleInput}
                    />
                    {this.state.formError.hoTen ? (
                      <div
                        className="alert alert-danger mt-3"
                        style={{ padding: "10px 20px" }}
                      >{`Họ và tên ${this.state.formError.hoTen}`}</div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="form-group">
                    <p>Email</p>
                    <input value= {this.state.formValue.email}
                      data-type="email"
                      name="email"
                      className="form-control"
                      onInput={this.handleInput}
                    />
                    {this.state.formError.email ? (
                      <div
                        className="alert alert-danger mt-3"
                        style={{ padding: "10px 20px" }}
                      >{`Email ${this.state.formError.email}`}</div>
                    ) : (
                      ""
                    )}
                  </div>
             
                </div>
              </div>
            </div>
            <div className="card-footer mt-5">
              <button type="submit" className="btn btn-success my-2" disabled={!this.state.valid}>
                Thêm sinh viên
              </button>
              <button type="button" className="btn btn-danger my-2 ms-3" onClick = {()=>{
                this.handleUpdate()
              }}>
                Cập nhật sinh viên
              </button>
            </div>
          </div>
        </form>
        <div className="table-sinhvien my-4">
          <TableSinhVien arr = {this.state.arrSinhVien} DelSinhVien = {this.handleDel} handleEdit = {this.handleEdit}/>
        </div>
      </div>
    );
  }
}
