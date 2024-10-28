import Custom from './custom.module.css'
import Other from './other.module.css'
import Outside from './style/outside.module.css'
export default function Home() {
  return (
    <div>
      <h1 className={Custom.main}>CSS Module With Next js</h1>
      <h2 className={Other.main} >Heading Other  CSS Module</h2>
      <h3 className={Outside.main}>Outside Module CSS text</h3>
    </div>
  );
}
