import './button.css'

const Button = (props) => {
  return (
    <>
      <button className={props.btnClass} type='button'>{props.name}</button>
    </>
  )
}

export default Button
