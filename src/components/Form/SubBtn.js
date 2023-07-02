import './SubBtn.css';
const SubBtn = (props) =>{
return <p className="actions">
<button type="reset" className="buttonAlt">
  Reset
</button>
<button type="submit" className="button" onClick={props.BtnHandler}>
  Calculate
</button>
</p>
}
export default SubBtn;