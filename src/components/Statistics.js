import statisticalData from '../statistics/statistical-data.json'

console.log(statisticalData)


export default function Statiatics(){
        let newData  = Object.fromEntries(statisticalData.map(item => [item.label, 0]));
        statisticalData.forEach(item => {newData[item.label] += item.percentage})
      
        console.log(newData)
        console.log(typeof newData);
        return newData.map(el => el);
}

