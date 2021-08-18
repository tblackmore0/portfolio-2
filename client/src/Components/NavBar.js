import { NavLink } from "./NavLink"

function NavBar () {

    return (
        <div className='navBar'>
            <div className='navLinkSection'>
                <NavLink title={'about'} link={'#about'}/>
                <NavLink title={'projects'} link={'#projects'}/>
                <NavLink title={'contact'} link={'#contact'}/>
            </div>
        </div>
    )

}
    
export {NavBar}