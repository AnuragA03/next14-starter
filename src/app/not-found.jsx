// This page is created when a user goes to an unexpectes/non-created route, it shows this page 

import Link from "next/link"

const NotFound = () => {
    return (
        <div>
            <h2>Not Found</h2>
            <p>Sorry, The page you are looking for does not exists.</p>
            <Link href="/">Return to home page.</Link>
        </div>
    )
}

export default NotFound