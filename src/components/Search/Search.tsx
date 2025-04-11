import { IoSearch } from 'react-icons/io5'

import cl from './Search.module.scss'

import { SearchProps } from '@src/types'
import Button from '@src/UI/Button'
import clsx from 'clsx'
import { useState } from 'react'

export default function Search({
   placeholder = 'search recipe',
   className,
}: SearchProps) {
   const [search, setSearch] = useState('')

   return (
      <form className={clsx(cl.form, className)}>
         <div className={cl.input}>
            <IoSearch aria-label="search-icon" className={cl.inputIcon} />
            <input
               placeholder={placeholder}
               className={cl.inputElement}
               type="search"
               role="search"
               value={search}
               onChange={(e) => setSearch(e.currentTarget.value)}
            />
         </div>
         <Button>Search</Button>
      </form>
   )
}
