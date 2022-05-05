import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import BookForm from "./bookForm";
import { getBookList ,deleteBook } from '../../service/index'
import { createAction } from "../../redux/action/action";
import { POST_LIST_BOOK } from "../../redux/action/type";
import { openNoti } from "../modal/commonModal";
import { notification } from "antd";
import BookFormUpdate from "./bookFormUpdate";

export default function Books() {
    const dispatch = useDispatch();
    const listBook = useSelector(state => state.bookReducer.books)
    console.log("lsitBOOK", listBook)

    const renderShown = () => {
        return listBook.map((item, key) => {
            return (
                <tr>
                    <td>{item.MaSach.length > 5 ? item.MaSach.substr(0, 5) : item.MaSach}</td>
          <td>{item.MaDauSach}</td>
          <td>
            {item.DonGiaBan}
          </td>
          <td>{item.NamXuatBan}</td>
          <td>{item.NhaXuatBan}</td>
          <td>{item.SoLuongTon}</td>
          
          <td>
            <button
              data-toggle="modal"
              data-bs-toggle="modal" 
              data-bs-target={"#n"+item.MaSach}
              className="btn btn-primary"
            >
              {" "}
              sửa
            </button>
          </td>
          <td>
            <button
              onClick={async () => {
                try {
                   let data = await deleteBook(item.MaSach);
                   if(data.status == 201){
                    // alert(data.data)
                    notification.error({
                        message: data.data,
                        description:"failed",
                        onClick: () => {
                          console.log('Notification Clicked!');
                        },
                      });
                      return ;
                   }
                    // openNoti("success","delete success fully","done")
                    notification.error({
                        message: data.data,
                        description:"Success",
                        onClick: () => {
                          console.log('Notification Clicked!');
                        },
                      });

                } catch (error) {
                    console.log("eroor book view",error)
                    alert("you dont have permission")
                }
              }}
              className="btn btn-danger"
            >
              {" "}
              xóa
            </button>
          </td>
          <BookFormUpdate id={item.MaSach} name={item.MaSach} item={item} />
                </tr>
            );
        });
    };
    
    let fecthListBook = async ()=>{
        try {
            let data = await getBookList();
            if(data.status == 201){
                notification.error({
                    message: data.data,
                    description:"failed",
                    onClick: () => {
                      console.log('Notification Clicked!');
                    },
                  });
                  return ;
            }
            console.log("data",data)
            dispatch(createAction(POST_LIST_BOOK, data.data))
        } catch (error) {
            console.log("error", error)
        }
    }

    useEffect( () => {
        fecthListBook()
    }, []);

    return (
        <div className="recentOrders">
            <div className="cardHeader">
                <h2 className="contentd">Sách</h2>

                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    add book
                </button>
                <BookForm />
            </div>
            <table>
                <thead>
                    <tr>
                        <td>mã sách</td>
                        <td>mã đầu sách</td>
                        <td>đơn giá bán</td>
                        <td>năm xuất bản</td>
                        <td>nhà xuất bản</td>
                        <td>số lượng tồn</td>
                        <td>sửa</td>
                        <td>xóa</td>
                    </tr>
                </thead>
                <tbody>{renderShown()}</tbody>
            </table>
        </div>
    );
}
