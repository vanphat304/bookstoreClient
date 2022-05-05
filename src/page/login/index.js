import React from 'react'
import "./login.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {login,saveUserlogin} from "../../service/index"
import {notification} from 'antd'

const Login = () => {

    let navigate = useNavigate();
    const [userLogin , setUserLogin] = useState({
        userName : "",
        password : "",
        server : "0"
    })

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setUserLogin({
            ...userLogin,
            [name]:value
        })
    }

    const handleSubmit = async ()=>{
        try {
            let data = await login(userLogin)
            console.log("data login",data)
            if(data.status == 201){
            console.log("data login status",data.status)
            notification.error({
                message: data.data,
                description:"failed",
                onClick: () => {
                  console.log('Notification Clicked!');
                },
              });
            }else {
                notification.success({
                        message: data.data,
                        description:"success",
                        onClick: () => {
                          console.log('Notification Clicked!');
                        },
                      });
                 saveUserlogin(userLogin)
                    navigate("/admin")
            }

        } catch (error) {
            console.log("error",error)
        }
    }



    return <div className="content">
        <div className="row">
            <div className="col-md-offset-5 col-md-4 text-center">
                <h1 className="text-white">BOOK STORE</h1>
                <div className="form-login"><br />
                    <h4>Secure Login</h4>
                    <br />
                    <input type="text" onChange={handleChange} name='userName' className="form-control input-sm chat-input" placeholder="username" />
                    <br /><br />
                    <input type="password" onChange={handleChange} name='password' className="form-control input-sm chat-input" placeholder="password" />
                    <br /><br />
                    <select defaultValue={0} onChange={handleChange} name="server" className="customSelect form-select input-sm chat-input primary"   >
                        <option value="0">server 00</option>
                        <option value="1"> server 01</option>
                        <option value="2"> server 02 </option>
                    </select>
                    <br /><br />
                    <div className="wrapper">
                        <span className="group-btn">
                            <a onClick={handleSubmit} className="btn btn-danger btn-md">login <i className="fa fa-sign-in" /></a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <br /><br /><br />
        <div className="footer text-white text-center">
        </div>
    </div>

}

export default Login