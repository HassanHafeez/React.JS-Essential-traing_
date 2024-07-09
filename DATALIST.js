//Right Data at Right Time
const data_Peak=[
    {name: "Nanga Parbat", elevation: 10891},
    {name: "LuluSar Top", elevation: 10892},
    {name: "Shimla Pahari", elevation: 10893},
    {name: "terch mir", elevation: 10894},
    {name: "K2", elevation: 10895}
    
];
/*
List: Data
1) List will check and renderEmpty
2) map the data with List 
    take Name as key
    Then Reander item in LIST
*/

const List=({data, renderItem, renderEmpty})=>{
return !data.length ? (renderEmpty):(
    <ul> {data.map((item)=>(
        <li key={item.name}>
            {renderItem(item)} </li>
    ))} </ul>
)}
const Hookfetchdata3 = () => {
return (
    <>
/* 
take data and send data to List
Send EmptyData
CallReandom Function and pass item as an argument
*/

      <List 
        data={data_Peak}
        renderEmpty={<p>This is List!</p>}
        renderItem={(item)=>
            <>
                {item.name}-{item.elevation} ft.
            </>
        }
        
      />
    </>
  );
};

export default Hookfetchdata3;
