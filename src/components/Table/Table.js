import './Table.css';
import TableElement from './TableElement';

const Table = (props) => {
  let content;

  if (props.toShowData.length > 0) {
    //console.log(props.toShowData[0].year);
    //content= <p>Wprowadzono nowe dane</p>;
    content = <table className="result">
      <thead>
        <tr>
          <th>Rok</th>
          <th>Łączne oszczędności</th>
          <th>Odsetki (rocznie)</th>
          <th>Łączne odsetki</th>
          <th>Zainwestowany kapitał</th>
        </tr>
      </thead>
      <tbody>
        {props.toShowData.map(investments =>
          <TableElement
            key={investments.key}
            YearNumber={investments.year}
            TotalSavingsEndOfYear={investments.savingsEndOfYear}
            InterestGainedInYear={investments.yearlyInterest}
            TotalInvestedCapital={investments.totalContribution}
            TotalInterestGained={investments.totalInterest}
          />)}
      </tbody>
    </table>;
  }

  else
    content = <p>Nie wprowadzono żadnych danych</p>

  return <div>{content}</div>
}
export default Table;