import { useState } from 'react'

const ColoredBox = () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple']
  const [index, setIndex] = useState(0)
  const [color, setColor] = useState(colors[index])

  const handleClick = () => {

    setIndex(index + 1 % colors.length)
    setColor(colors[(index + 1) % colors.length])
  }
  return (
    <button onClick={handleClick} style={{ backgroundColor: color }}>
        Change color
    </button>
  )
}

export default ColoredBox