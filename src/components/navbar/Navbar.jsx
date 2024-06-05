import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"
import Image from "next/image"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href="/" >
                <Image src="/logoFinal.png"
                    width={120}
                    height={100}
                    className={styles.logo}
                />
            </Link>

            <div>
                <Links />
            </div>
        </div>
    )
}

export default Navbar