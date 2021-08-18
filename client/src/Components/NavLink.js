function NavLink (props) {
    return (
        <div className='navLinkDiv'>
            <a href={props.link}>{props.title}</a>
        </div>
    )
}

export {NavLink}