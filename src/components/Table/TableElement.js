const TableElement = (props) =>{
return <tr>
        <td>{props.YearNumber}</td>
        <td>{props.TotalSavingsEndOfYear} zł</td>
        <td>{props.InterestGainedInYear} zł</td>
        <td>{props.TotalInterestGained} zł</td>
        <td>{props.TotalInvestedCapital} zł</td>
</tr>
}
export default TableElement;