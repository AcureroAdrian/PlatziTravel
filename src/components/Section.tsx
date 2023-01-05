import React from "react"

interface Props {
    children: React.ReactElement[]
}

export const Section = ({children}: Props): JSX.Element => {
  return (
    <section className='w-full h-auto'>
        {children}
    </section>
  )
}
