
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const ProtectedRoutes = () => {
    //untuk mengambil value path pada url yang sudah di definisikan pada routes
    const { pathname } = useLocation()

    //untuk pengambil value token dari local storage menggunakan getItem
    const token = localStorage.getItem('token')

    //definisikan halaman apa saja yang ingin di protected
    const tokenProtected =["/", "/movies", "/tv-shows", "/myprofile", "/myfavoritetv"]

    //definisikan halaman apa saja yang ingin di public
    const publicIsProtected = ["/login"]

    //validasi untuk proteksi halaman
    console.log(pathname)
    if (tokenProtected.includes(pathname)) {
        if (!token) {
            console.log("test")
            return <Navigate to="/login" />
        }
    }
    if (publicIsProtected.includes(pathname)) {
        if (token) {
            return <Navigate to="/" />
        }
    }
    return <Outlet />
}
export default ProtectedRoutes