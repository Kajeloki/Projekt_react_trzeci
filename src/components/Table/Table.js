import './Table.css';
import TableElement from './TableElement';

const Table = (props) =>{
  let content;
  
   if(props.toShowData.length>0)
   {
    //console.log(props.toShowData[0].year);
    //content= <p>Wprowadzono nowe dane</p>;
    content= <table className="result">
    <thead>
      <tr>
        <th>Rok</th>
        <th>Łączne oszczędności</th>
        <th>Wkład (rocznie)</th>
        <th>Łączny wkład</th>
        <th>Zainwestowany kapitał</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>YEAR NUMBER</td>
        <td>TOTAL SAVINGS END OF YEAR</td>
        <td>INTEREST GAINED IN YEAR</td>
        <td>TOTAL INTEREST GAINED</td>
        <td>TOTAL INVESTED CAPITAL</td>
      </tr>
      <TableElement
      YearNumber={props.toShowData[0].year}
      TotalSavingsEndOfYear={props.toShowData[0].savingsEndOfYear}
      InterestGainedInYear={props.toShowData[0].yearlyInterest}
      TotalInvestedCapital={props.toShowData[0].totalContribution}
      TotalInterestGained={props.toShowData[0].totalInterest}
      />
            <TableElement
      YearNumber={props.toShowData[1].year}
      TotalSavingsEndOfYear={props.toShowData[1].savingsEndOfYear}
      InterestGainedInYear={props.toShowData[1].yearlyInterest}
      TotalInvestedCapital={props.toShowData[1].totalContribution}
      TotalInterestGained={props.toShowData[1].totalInterest}
      />
            <TableElement
      YearNumber={props.toShowData[2].year}
      TotalSavingsEndOfYear={props.toShowData[2].savingsEndOfYear}
      InterestGainedInYear={props.toShowData[2].yearlyInterest}
      TotalInvestedCapital={props.toShowData[2].totalContribution}
      TotalInterestGained={props.toShowData[2].totalInterest}
      />
            <TableElement
      YearNumber={props.toShowData[3].year}
      TotalSavingsEndOfYear={props.toShowData[3].savingsEndOfYear}
      InterestGainedInYear={props.toShowData[3].yearlyInterest}
      TotalInvestedCapital={props.toShowData[3].totalContribution}
      TotalInterestGained={props.toShowData[3].totalInterest}
      />
    </tbody>
    </table>;
   }

   else
   content=<p>Nie wprowadzono żadnych danych</p>

return  <div>{content}</div>
}
export default Table;