import React, { FC } from 'react'
import Link from 'next/link'

import { Bag as Cart, Heart } from '@components/icons'
import s from './Usernav.module.css'

const Usernav: FC = () => {
  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <Cart />
        </li>

        <li className={s.item}>
          <Link href='/'>
            <a>
              <Heart />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Usernav
