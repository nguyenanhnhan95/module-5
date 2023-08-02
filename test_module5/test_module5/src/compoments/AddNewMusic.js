import { Formik,Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import *as yup from "yup"
import Swal from "sweetalert2";
import { findStatus, saveMusic } from "../service/MusicService";
import { useNavigate } from "react-router-dom";
function AddNewMusic() {
    const [music, setMusic] = useState()
    const [status,setStatus]=useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        getStatus()
    },[])
    const getStatus=()=>{
        findStatus().then((data)=>{
            setStatus(data)
        })
    }
    const addMusic=(music)=>{
        const newMusic={flagDelete:false,...music,status:JSON.parse(music.status)}
        console.log(newMusic)
        saveMusic(newMusic).then(()=>{
            Swal.fire({
                icon:"success",
                title:"Add success",
                showConfirmButton:false,
                timer:15000
            })
            navigate("/")
        }).catch(()=>{
            alert("loi")
        })
    }
    if(status.length===0){
        return null;
    }
    return (
        <>
            <Formik
                initialValues={{
                    nameMusic: "",
                    nameSing: "",
                    releaseDate: "",
                    numberLikes: 0,
                    status: ""

                }}
                validationSchema={yup.object({
                    nameMusic: yup.string().required("Yêu cầu nhập tên bài hát :"),
                    nameSing: yup.string().required("Yếu cầu nhập tên ca sĩ")
                    .max(30,"Không nhập quá 30 ký tự"),
                    releaseDate: yup.string().required("Yêu cầu nhập ngày phát :"),
                    numberLikes: yup.number().required("Yêu cầu nhập số lượng thích"),
                    status: yup.string().required("Yêu cầu nhập trạng thái :")
                })}
                onSubmit={(value)=>{
                    addMusic(value);
                }}>
                <Form className="form-add">
                    <h2 style={{textAlign:"center"}}>Đăng Ký Bài Hát</h2>
                    <div className="mb-3">
                        <label htmlFor="nameMusic" className="form-label">Tên bài hát</label>
                        <Field type="text" name="nameMusic" className="form-control" id="nameMusic" />
                        <ErrorMessage name="nameMusic" component="div"/> 
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nameSing" className="form-label">Ca sĩ</label>
                        <Field type="text" name="nameSing" className="form-control" id="nameSing" />
                        <ErrorMessage name="nameSing" component="div"/> 
                    </div>
                    <div className="mb-3">
                        <label htmlFor="releaseDate" className="form-label">Thời gian phát</label>
                        <Field type="date" name="releaseDate" className="form-control" id="time" />
                        <ErrorMessage name="releaseDate" component="div"/> 
                    </div>
                    <div className="mb-3">
                        <label htmlFor="numberLikes" className="form-label">Số lượng like</label>
                        <Field type="number" name="numberLikes" className="form-control" id="numberLikes" />
                        <ErrorMessage name="numberLikes" component="div"/> 
                    </div>
                    <div className="mb-3">
                        <label >Trạng thái</label>
                        <Field as="select" name="status">
                            <option value={""}>Choose</option>
                            {status && status.map((s)=>{
                                return(
                                    <option key={s.nameStatus} value={JSON.stringify(s)}>{s.nameStatus}</option>
                                )
                            })}
                        </Field>
                        <ErrorMessage name="status" component="div"/>
                    </div>
                    <div className="mb-3" style={{textAlign:"center"}}>
                    <button type="submit" class="btn btn-primary">Đăng Ký</button>
                    </div>
                </Form>
            </Formik>


        </>
    )
}
export default AddNewMusic;