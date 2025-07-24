import './button.css'

const Button = (props) => {
  return (
    <>
      <button className={props.btnClass}>{props.name}</button>
    </>
  )
}

export default Button
