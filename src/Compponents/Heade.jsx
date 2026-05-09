import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Heade() {

    const navItems = [
        {
            label : 'Home',
            to: '/'
        },
        {
            label : 'Project',
            to: '/project'
        },
        {
            label : 'Hobi',
            to: '/hobi'
        }
    ]

  return (
    <header>
        <ul>
           {navItems.map((item) => (
            <li key={item.to}>
                <NavLink
                    to={item.to}
                    className={({ isActive }) => isActive ? 'active' : ''}
                    >
                    {item.label}
                </NavLink>
            </li>
            ))}
        </ul>
    </header>
  )
}
