import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div>
            <Link to="/">
                <button type="button" className='btn btn-info'>
                    Info
                </button>
            </Link>
        </div>
    )
}