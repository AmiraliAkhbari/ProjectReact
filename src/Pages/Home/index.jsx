import React from 'react'
import Slider from '../../Components/Slider'
import Topics from '../../Components/Topics'
import Blog from '../Blog'

export default function Home() {
  return (
    <div>
      <Slider/>
      <Topics/>
      <Blog/>
    </div>
  )
}
