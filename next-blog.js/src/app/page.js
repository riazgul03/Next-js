"use client"
import { useState } from 'react';
import Style from './style.module.css'
export default function Home() {
  const [color, setColor] = useState("red");
  const { red } = Style

  return (
    <div>
      <h1 className={color == 'red' ? Style.red : Style.green}>Contion With Style</h1>
      <h2 style={{ backgroundColor: color == 'red' ? 'red' : 'green' }}>Heading 2</h2>
      <h3 id={Style.orange}>Heading 3</h3>

      <h4 className={red}>Dummy Text</h4>
      <h4 className={red}>Dummy Text</h4>
      <h4 className={red}>Dummy Text</h4>
      <h4 className={red}>Dummy Text</h4>

      <button onClick={() => setColor('green')}>Update Color</button>
    </div>
  );
}
