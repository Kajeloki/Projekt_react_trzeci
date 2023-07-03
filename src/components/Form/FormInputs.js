

const FormInputs = (props) => {
    return <p>
        <label >{props.label} </label>
        <input type="number" min="0" id="current-savings" onChange={props.onChangeHandler} />
    </p>
}
export default FormInputs;