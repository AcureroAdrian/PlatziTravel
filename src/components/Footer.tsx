import {FC, ReactElement} from "react"

export const ListItemLink = ({children} : {children: string}) => {
  return (
    <li className='text-sm cursor-pointer hover:underline hover:underline-offset-1'>
      {children}
    </li>
  )
}

export const Footer: FC<{children: ReactElement[] | ReactElement}> = ({children}):JSX.Element => {
  return (
    <footer className='w-full h-auto bg-gray-50 p-6 '>
      <h4 className='text-lg'>Acerca De</h4>
      <ul className='text-gray-300 space-y-2'>
        {children}
      </ul>
    </footer>
  )
}