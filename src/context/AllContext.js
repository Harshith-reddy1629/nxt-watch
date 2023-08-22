import {createContext} from 'react'

const AllContext = createContext({
  lightTheme: '',
  changeTheme: () => {},
})

export default AllContext
