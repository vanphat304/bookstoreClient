import React from "react";
import "./form.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { insertBook } from "../../service";
import { notification } from "antd";


export default function BookForm(props) {

    const [bookInsert , setbookInsert ] = useState({
        maDauSach:"",
        nhaxb:"",
        namxb:"",
        soluongton:"",
        dongiaban:"",
    })


    const handlechangeBookInsert = (e)=>{
        const {name , value} = e.target

        setbookInsert({
            ...bookInsert,
            [name]:value
        })

        console.log("data change",bookInsert)
    }

    const handleSubmit = async ()=>{
        try {
            let data = await insertBook(bookInsert)
            if(data.status == 201){
                // alert("faile upload",data)
                notification.success({
                    message: data.data,
                    description:"Success",
                    onClick: () => {
                      console.log('Notification Clicked!');
                    },
                  });
                  return ;
            }
            console.log("data hanlde submit",data)
            notification.error({
                message: data.data,
                description:"failed",
                onClick: () => {
                  console.log('Notification Clicked!');
                },
              });

        } catch (error) {
                console.log("eroor handle submit")
                alert("post failed , you don't have permission")
        }
    }

    // console.log("safsf", formik.initialValues);
    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">thêm sách</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <form>
                            <div classname>
                                <label>mã đầu sách</label> <br />
                                <input onChange={handlechangeBookInsert} classname="customSelect form-select input-sm chat-input" type="text" name="maDauSach"  />
                            </div>
                            <div classname>
                                <label>nhà xuất bản</label> <br />
                                <input onChange={handlechangeBookInsert}  classname="customSelect form-select input-sm chat-input" type="text" name="nhaxb" />
                            </div>
                            <div classname>
                                <label>năm xuất bản</label> <br />
                                <input onChange={handlechangeBookInsert} classname="customSelect form-select input-sm chat-input" type="text" name="namxb"  />
                            </div>
                            <div classname>
                                <label>số lượng tồn</label> <br />
                                <input onChange={handlechangeBookInsert} classname="customSelect form-select input-sm chat-input" type="text" name="soluongton" />
                            </div>
                            <div classname>
                                <label>đơn giá bán</label> <br />
                                <input onChange={handlechangeBookInsert} classname="customSelect form-select input-sm chat-input" type="text" name="dongiaban"  />
                            </div>
                            {/* <button type="button" classname="button" data-dismiss="modal">
                                Close
                            </button>
                            <button type="button" classname="button">
                                Save
                            </button> */}
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button data-bs-dismiss="modal" onClick={handleSubmit} type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

    );
}
