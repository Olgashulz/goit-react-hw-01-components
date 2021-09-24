import statisticalData from '../../statistics/statistical-data.json'
import styles from './Statistics.module.css';

// console.log(statisticalData)
export default function Statiatics(){    
  return (<ul className={styles.list}> 
    {statisticalData.map((item) => (
        <li className={styles.item} style={{backgroundColor: getColor()}} key={ item.id }>
        <span className={styles.label}>{ item.label }</span>
        <span className={styles.percentage}>{ `${ item.percentage.toLocaleString()}%` }</span>
      </li>
     
    ))}
    </ul>);
}

function getColor(){
  var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
  while(color.length < 6) {
      color = "0" + color;
  }
  return "#" + color;
}

