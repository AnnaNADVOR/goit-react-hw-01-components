import StatisticItem from "./StatisticItem"

export default function Statistics({ title, stats }) {
    return (
        <section>
            {title && (<h2>{title}</h2>)}
            <ul>
                {stats.map(item => (<StatisticItem
                key={item.id}
                label={item.label}
                percentage={item.percentage}
                />))}      
            </ul>       
        </section>                
    )
}
