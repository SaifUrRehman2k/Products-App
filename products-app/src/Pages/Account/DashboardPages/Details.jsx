import React, { useContext } from 'react'
import Button from '../../../components/button'
import Input from '../../../components/Input'
import { UserContext } from '..'

const Details = () => {
  const { user } = useContext(UserContext)

  return (
    <div className='myDetailsDiv dashBoardContent'>
      <h1>Details</h1>
      <h3>Personal Information</h3>
      <div className="personalInfo flex-row-nowrap align-start justify-around m-2-0 w-100 gap-2 p-2-0">
        <small>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci enim commodi laudantium provident quasi voluptatem pariatur nulla illum, totam corrupti placeat aut libero consequuntur architecto? Placeat odio nobis consequatur dignissimos.
        </small>

        <div className='flex-col-wrap align-start justify-around gap-1'>
          <div className='flex-row-nowrap align-center justify-around gap-1'>
            <Input type='text' placeHolder={user?.name?.firstname} inputID='firstname' disabled/>
            <Input type='text' placeHolder={user?.name?.lastname}  inputID='lastname' disabled/>
          </div>
            <Input type='email' placeHolder={user?.email}  inputID='email' disabled/>
            <Input type='number' placeHolder={user?.phone} inputID='phone' disabled/>

          <Button name="Save" btnClass="saveBtn" />
        </div>

      </div>

      <h3>Secrity</h3>
      <div className="personalInfo flex-row-nowrap align-start justify-around m-2-0 w-100 gap-2 p-2-0">
        <small style={{width:'40%'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci enim commodi laudantium provident quasi voluptatem pariatur nulla illum, totam corrupti placeat aut libero consequuntur architecto? Placeat odio nobis consequatur dignissimos.
        </small>
        <div style={{width:'60%'}} className='flex-col-wrap align-start justify-around gap-1'>
          <input type="email" name="email" />
          <input type="password" name="password" />
          <Button name="Save" btnClass="saveBtn" />
        </div>
      </div>

    </div>
  )
}

export default Details
