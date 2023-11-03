export default function StatisticItem ({ id, label, percentage }) {
    return (     
        <li key={id}>
            <span>{label}</span>
            <span>{percentage}</span>
        </li>
    )    
}

// export default function Statistics({ title, stats }) {
//     return (
//         <section>
//             {title && (<h2>{title}</h2>)}
//                 <ul>
//                     {stats.map(el => (
//                     <li key={el.id}>
//                         <span>{el.label}</span>
//                         <span>{el.percentage}</span>
//                     </li>))}      
//                 </ul>
//         </section>
//     )
// }


