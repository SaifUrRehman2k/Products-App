import './category.css'
import Button from '../button'


const CategoryCard = (props) => {
    return (
        <div className={props.title + ' flex-col-wrap align-center justify-around CategoryCard'}>
            <div id='categoryContent' className='content flex-col-wrap align-center justify-around'>
                <h1>{props.title}</h1>
                <Button name='Shop now' btnClass='buyNow w-50' />
            </div>
        </div>
    )
}

export default CategoryCard
