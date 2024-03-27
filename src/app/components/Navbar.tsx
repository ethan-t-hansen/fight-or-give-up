import { useRouter } from 'next/router'
import Link from 'next/link'

const Navbar = () => {

    return (
        <header>
            <div className="container">
                <Link href="/">
                    <h1>U-TRITION</h1>
                </Link>
                <nav>
                    <Link href="/home">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/login">Login</Link>
                </nav>
            </div>
        </header>
    )

};

export default Navbar;