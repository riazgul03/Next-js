import { Roboto } from "next/font/google"
const roboto = Roboto({
  weight: '100',
  subsets: ['latin'],
  display: 'swap'
})
export default function Home() {
  return (
    <div>
      <h1>Font Optimization in Next.js</h1>
      <h1 className={roboto.className}>Font With Next js Font Feature</h1>
      {/* <h1 style={{fonFamily:'Roboto', fontWeight:'100'}}>Font With Link Tag</h1> */}
    </div>
  );
}
