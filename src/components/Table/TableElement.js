const TableElement = (props) =>{
    let id=Math.random().toString();
    const key=id;
    const formatter = new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: 'PLN',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

     
    let totalSavingsEndOfYear=formatter.format(props.TotalSavingsEndOfYear);
    let interestGainedInYear=formatter.format(props.InterestGainedInYear);
    let totalInterestGained=formatter.format(props.TotalInterestGained);
    let totalInvestedCapital=formatter.format(props.TotalInvestedCapital);
return <tr>
        <td>{props.YearNumber}</td>
        <td>{totalSavingsEndOfYear}</td>
        <td>{interestGainedInYear}</td>
        <td>{totalInterestGained}</td>
        <td>{totalInvestedCapital}</td>
</tr>
}
export default TableElement;