import styles from "./page.module.css";

export default function Home() {
  return (

    <main className={styles.main}>
      <User name="Riaz" />
      <User name="Peter" />
      <User name="Sam" />
      <User name="Ali" />

      <h1>Home Page</h1>
    </main>
  );
}

const User = (props) => {
  return (
    <h1>User name is {props.name} </h1>
  )
}
