import React from 'react'

const Header = ({title}) => {
    const headerstyle={backgroundColor:'mediumblue',color:'white'}
  return (
    <header style={headerstyle}>
        <h1>{title}</h1>
    </header>
  )
}
Header.defaultProps={
  title:"To Do List"
}

export default Header