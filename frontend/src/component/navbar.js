import { Link } from 'react-router-dom'

function Panel() {
    return (
        <div className=''>
            <ul className=' p-2 m-2 '>
                <li ><Link to='/faq'>To-Do-List</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li>

            </ul>
        </div>
    )
}

export default Panel;