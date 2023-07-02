

const FormInputs = (props) => {
    return <p>
        <label >Current Savings ($)</label>
        <input type="number" id="current-savings" onChange={props.onChangeHandler} />
    </p>
}
export default FormInputs;