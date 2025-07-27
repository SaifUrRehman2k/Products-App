import './filter.css'

const Filter = () => {
    return (
        <div className='flex-row-nowrap align-center justify-between p-0-2 m-2-0'>
            <div className='filters flex-row-nowrap align-center justify-around'>
                <ul className='flex-row-nowrap align-center justify-around l-style-none gap-1 p-0'>
                    <li>example</li>
                    <li>example</li>
                    <li>example</li>
                    <li>example</li>
                    <li>example</li>
                    <li>example</li>
                </ul>
            </div>
            <div className='Sort flex-row-nowrap align-center justify-around'>
                Sort
            </div>
        </div>
    )
}

export default Filter
