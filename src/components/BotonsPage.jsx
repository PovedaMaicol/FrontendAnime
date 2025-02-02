import React from 'react'
import { Button } from 'react-bootstrap'

const BotonsPage = ({ numberPage, setNumberPage }) => {
  return (
    <div>
        <Button onClick={() => setNumberPage(numberPage + 1)}>prev</Button>
        <Button onClick={() => setNumberPage(numberPage + 1)}>next</Button>
    </div>
  )
}

export default BotonsPage