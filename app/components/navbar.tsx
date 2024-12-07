import { NavLink } from "@remix-run/react"

const navLinks = [
  {
    pathname: "Home",
    path: "/",
  },
  {
    pathname: "Product",
    path: "/product",
  }
]

export default function Navbar() { 
  return (
    <header>
      <nav className="h-14 bg-violet-600 grid items-center px-5">
        <ul className="flex justify-end gap-4">
          {
            navLinks.map((nav) => (
              <li key={nav.pathname}>
                <NavLink 
                  to={nav.path}
                  className={({isActive, isPending}) => (
                    isActive ? "text-white font-semibold underline" :
                     isPending ? "text-white font-semibold" :
                      "text-white font-semibold"
                  )}
                  >{nav.pathname}</NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}
