export default function Navbar(){
    return <nav className="nav">
        <ul>
            <li>Giới Thiệu</li>
            <li>Loại Phòng</li>
            <li>Ẩm Thực</li>
            <li>Hội Nghị Và Sự Kiện</li>
            <li>SPA</li>
            <li>Giải Trí</li>
            <li>Điểm Đến</li>
            <li>Ưu</li>
        </ul>
        <ul>
            <li className="active">
                <a href="">Pricing</a>
            </li>
            <li>
                <a href="">About</a>
            </li>
        </ul>
    </nav>
}