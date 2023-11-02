
export default function Statistics({ title, stats }) {
    return (
        <section>
            <h2>{title}</h2>
                <ul>
                    {stats.map(el => (
                    <li key={el.id}>
                        <span>{el.label}</span>
                        <span>{el.percentage}</span>
                    </li>))}      
                </ul>
         </section>
    )
}

