import React from 'react'



const getStyleName = (value) => {
  if(value === "=") {
    return "equals"
  }

  else if(value === "/" || value === "*" || value === "-" || value === "+") {
    return "opt"
  }
}


const Button = ({value}) => {
  return (
    
      <button className={`${getStyleName(value)} button`}>{value}</button>
    
  )
}

export default Button
