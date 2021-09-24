import Statiatics from "../Statistics/Statistics";
import styles from './Section.module.css'


export default function Section ({ title }){
    return (
    <section className={styles.section}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <Statiatics /> 
    </section>)
}