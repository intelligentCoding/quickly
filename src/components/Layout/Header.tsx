import { Maybe } from '@/types/maybe'
import { User } from '@/types/user'
import { useRouter } from 'next/router'
import React from 'react'
import { useCookies } from 'react-cookie'

interface HeaderProps {
  page?: string
  user?: Maybe<User>
}
export const Header: React.FC<HeaderProps> = ({ page, user }) => {
  const linkClass = "px-4 py-2 flex text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
  const [cookie, setCookie, removeCookie] = useCookies(['token']);
  const router = useRouter()
  const SignupNavItem: React.FC = () => {
    return (
      <li className="nav-item">
        <a
          className={linkClass}
          href="/signup"
        >
          Signup
        </a>
      </li>
    )
  }

  const LoginNavItem: React.FC = () => {
    return (
      <li className="nav-item">
        <a
          className={linkClass}
          href="/login"
        >
          login
        </a>
      </li>
    )
  }
  const ProfileNavItem: React.FC = () => {
    return (
      <li className="nav-item">
        <a
          className={linkClass}
          href="/profile"
        >
          Profile
        </a>
      </li>
    )
  }

  const rendeRightButtons = (page?: string, user?: Maybe<User>) => {
    if (page === 'signup') {
      return (
        <>
          Already have an account? <LoginNavItem />
        </>
      )
    }

    if (page === 'login') {
      return (
        <>
          Dong't have an account? <SignupNavItem />
        </>
      )
    }

    if (typeof user === 'undefined' || user === null) {
      return (
        <>
          <LoginNavItem />
          <SignupNavItem />
        </>
      )
    } else {
      return (
        <>
        <div className='items-center flex'>
          {`Welcome `} {user.full_name}
        </div>
        <div className={linkClass}>
        {page === 'notProfile' && (
        <ProfileNavItem />
        )}
          <button className='bg-pink-700 text-white font-bold py-2 px-2 w-full rounded hover:bg-pink-500' onClick={onLogout}>Logout</button>
        </div>
        </>
      )
    }


  }
  const onLogout = () => {    
    removeCookie('token')
    router.push('/')
  }
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              Quickly Assignment
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(prev => !prev)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {
                rendeRightButtons(page, user)
              }

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}