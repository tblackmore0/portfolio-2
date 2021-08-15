import { NavLink } from "./NavLink"

function NavBar () {

    return (
        <div className='navBar'>
            <div className='navLinkSection'>
                <NavLink title={'about'}/>
                <NavLink title={'projects'}/>
                <NavLink title={'contact'}/>
            </div>
        </div>
    )

}
    
export {NavBar}