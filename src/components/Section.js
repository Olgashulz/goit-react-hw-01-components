import Statiatics from "../components/Statistics";

export default function Section ({ title }){
    return (
    <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <Statiatics /> 
    </section>)
}