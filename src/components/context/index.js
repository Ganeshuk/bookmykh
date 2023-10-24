import React from 'react'

const Context = React.createContext({
  ticket: [
    {id: 1, book: 1},
    {id: 2, book: 0},
  ],
})

export default Context
