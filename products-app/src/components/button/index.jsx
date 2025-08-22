import './button.css'

const Button = (props) => {
  return (
    <>
      <button className={props.btnClass} type='button' onClick={props.btnFucntiion}>{props.name}</button>
    </>
  )
}

export default Button
