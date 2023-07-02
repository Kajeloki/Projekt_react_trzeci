import './Table.css';

const Table = (props) =>{
  let content;
   if(props.toShowData.length>0)
   content= <p>Wprowadzono nowe dane</p>;
  //  content= <table className="result">
  //  <thead>
  //    <tr>
  //      <th>Year</th>
  //      <th>Total Savings</th>
  //      <th>Interest (Year)</th>
  //      <th>Total Interest</th>
  //      <th>Invested Capital</th>
  //    </tr>
  //  </thead>
  //  <tbody>
  //    <tr>
  //      <td>YEAR NUMBER</td>
  //      <td>TOTAL SAVINGS END OF YEAR</td>
  //      <td>INTEREST GAINED IN YEAR</td>
  //      <td>TOTAL INTEREST GAINED</td>
  //      <td>TOTAL INVESTED CAPITAL</td>
  //    </tr>
  //  </tbody>
  //  </table>;
   else
   content=<p>Nie wprowadzono żadnych danych</p>

return  <div>{content}</div>
}
export default Table;