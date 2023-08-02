import { useEffect } from "react";
import { useState } from "react";
import { findByIdMusic, findMusics, searchMusic, updateMusic } from "../service/MusicService";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Music() {
    const [musics, setMusics] = useState([])
    const [music, setMusic] = useState(null)
    const [currentPage, setCurrentPage] = useState(0)
    useEffect(() => {
        showMusic();
    }, [currentPage])
    const showMusic = () => {
        findMusics(currentPage).then((data) => {
            if (data.length === 0) {
                setCurrentPage(currentPage - 1)
            }
            setMusics(data.content);
            console.log(data)
        })
    }
    const previousPage = () => {
        if (currentPage != 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const nextPage = () => {
        setCurrentPage(currentPage + 1)
    }
    const handleMusic = (event) => {
        searchMusic(event.target.value).then((data) => {
            console.log(data)
            setMusics(data);

        })
    }
    const transferStatus = (a, b) => {
        const confirm = window.confirm("Bạn có muốn công khai bài hát  :" + b)
        if (confirm) {
            findByIdMusic(a).then((data) => {
                console.log(data)
                const newMusic = { ...data, status: { idStatus: 1, nameStatus: "Công khai" } }
                updateMusic(a, newMusic).then(() => {
                    Swal.fire({
                        icon: "success",
                        title: "Đã công khai",
                        showConfirmButton: false,
                        timer: 15000,
                    })
                    showMusic()
                })
            }).catch(() => {
                alert("loi")
            })
        }
    }
  
    return (
        <div className="container-xl">
            <div className="col-md-4">

            </div>
            <div className="row">
                <div className="col-md-4">
                    <Link to={`/create`}>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#addNewService" className="btn btn-success"><i className="material-icons"></i> <span>Đăng kí bài hát</span></button>
                    </Link>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="search-box">
                        <i className="material-icons"></i>
                        <input onChange={handleMusic} type="text" className="form-control" placeholder="Search…" />
                    </div>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-striped ">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên bài hát </th>
                            <th>Ca sĩ</th>
                            <th>Thời gian phát </th>
                            <th>Số lượng yêu thích</th>
                            <th>Trạng thái </th>
                            <th>Chức năng</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        {musics && musics.map((music, index) => (
                            <tr key={music.id}>
                                <td>{music.id}</td>
                                <td>
                                    {music.nameMusic}</td>
                                <td>{music.nameSing}</td>
                                <td>{music.releaseDate}</td>
                                <td>{music.numberLikes}</td>
                                <td>{music.status.nameStatus}</td>
                                <td><button onClick={() => { transferStatus(music.id, music.nameMusic) }}>Công Khai</button></td>
                                
                            </tr>
                        ))}


                    </tbody>
                </table>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><button onClick={() => { previousPage() }} className="page-link" >Previous</button></li>

                        <li className="page-item"><button onClick={() => { nextPage() }} className="page-link" >Next</button></li>
                    </ul>
                </nav>
                {/* <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          /> */}

            </div>
        </div>
    )
}
export default Music;