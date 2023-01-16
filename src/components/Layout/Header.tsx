import { Maybe } from '@/types/maybe'
import { User } from '@/types/user'
import React from 'react'

interface HeaderProps {
  page?: string
  user?: Maybe<User>
}
export const Header: React.FC<HeaderProps> = ({ page, user }) => {
  const linkClass = "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
  const LoginNavItem: React.FC = () => {
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

  const SignupNavItem: React.FC = () => {
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
        <div className={linkClass}>
          {user.full_name}
        </div>
      )
    }


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