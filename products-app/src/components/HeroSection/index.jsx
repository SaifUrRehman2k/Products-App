import './hero.css'
import Button from '../button'

const HeroSection = (props) => {
  return (
    <div className='w-100'>
        <div className={`heroSect flex-row-nowrap align-center justify-center gap-1 p-0-2 ${props.heroClass}`}>
        <div className='flex-col-wrap align-start justify-center w-75 gap-1'>
          <h1 className='m-0'>{props.pageHeading}</h1>
          <p className='m-0'>{props.pageLine}</p>
          <Button name="Go" btnClass={`buyNow w-25 ${props.btnClass}`} />
        </div>
        <div className='heroImages w-50'>
          {
            props.images?.map((img,index)=>(
                <img src={img} key={index} alt={`image${index}`} />
            ))
          }
        </div>

      </div>
      
    </div>
  )
}

export default HeroSection
