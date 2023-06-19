import { useState, useEffect } from "react";
import { Navbar, Typography, Button, IconButton, } from "@material-tailwind/react";
import { Link } from "react-router-dom";
// import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import logo from "../images/books.jpg"
import AuthProvider, { useAuth } from "../AuthComponent/AuthFile";

export default function NavigationBar() {

    const auth = useAuth();
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-5 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {auth.role === 'admin' && auth.isLoggedIn && (
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal"
                >
                    <Link to='/addBook'>
                        <a href="#" className="flex items-center">
                            Add Book
                        </a></Link>
                </Typography>
            )}

            {auth.role === 'admin' && auth.isLoggedIn && (
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal"
                >
                    <a href="#" className="flex items-center">
                        <Link to='/bookList'> List of Books </Link>
                    </a>
                </Typography>
            )}

        </ul>
    );

    return (
        <Navbar className="mx-auto py-2 lg:py-4" style={{ zIndex: 2 }}>
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 py-1.5 font-medium"
                    >
                        <Link to='/'>   <img src={logo} alt="" height='50' width='50' /></Link>
                    </Typography>
                    <div className="hidden lg:block">{navList}</div>
                </div>

                <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>

                    {auth.role === 'student' && auth.isLoggedIn && (
                        <div class="relative py-2">
                            <Link to='/cart' >
                                <div class="t-0 absolute left-3">
                                    {/* <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">3</p> */}
                                </div>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: mt-4 h-8 w-8">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </Link>
                        </div>
                        )}

                    {auth.isLoggedIn && (

                        <Link to='/'>
                            <Button variant="gradient" style={{ width: "85px", height: "40px" }} size="sm" className="hidden lg:inline-block" onClick={()=>{
                                auth.logout();
                                auth.addRole(null);
                            }}>
                                logout
                            </Button>
                        </Link>
                    )}

                    

                    {!auth.isLoggedIn && (

                        <Link to='/login'>
                            <Button variant="gradient" style={{ width: "85px", height: "40px" }} size="sm" className="hidden lg:inline-block">
                                Login
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </Navbar>
    );
}