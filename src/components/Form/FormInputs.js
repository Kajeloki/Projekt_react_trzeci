

const FormInputs = (props) => {
    return <p>
        <label >{props.label} </label>
        <input type="number" id="current-savings" onChange={props.onChangeHandler} />
    </p>
}
export default FormInputs;