import statisticalData from '../statistics/statistical-data.json'

console.log(statisticalData)


// export default function Statiatics(){    
//         return statisticalData.map((item) => (
//             <li className="item" key={ item.id }>
//               <span className="label">{ item.label }</span>
//               <span className="percentage">{ `${ item.percentage }%` }</span>
//             </li>
//           ));
// }

export default function Statiatics(){    
  return (<ul> 
    {statisticalData.map((item) => (
      <li className="item" key={ item.id }>
        <span className="label">{ item.label }</span>
        <span className="percentage">{ `${ item.percentage.toLocaleString()}%` }</span>
      </li>
     
    ))}
    </ul>);
}

