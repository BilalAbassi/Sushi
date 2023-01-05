import React from 'react'
import '../style/contactform.css'
import image from '../assets/1.jpg'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'


function ContactForms() {

const Schima=yup.object().shape({

Names : yup.string().required('Name is required'),
Emails: yup.string().email().required('Email  required'),
Contacts : yup.number().integer().required('contact Number  required'),
TEXTS : yup.string().required('Your Msg required')

})
 const {register,handleSubmit,formState:{errors}}=useForm({resolver: yupResolver(Schima)})
  const Mysubmite=(data)=>{console.log(data)}





  return (
    <div className='top'><div className='Hadings'><h1>Contact</h1></div>
    <div className='mains'>
        <div className='rs' style={{backgroundImage:`ur(${image})`}}><img src={image}/></div>
        <div className='ls'>
            <form className='formes' onSubmit={handleSubmit(Mysubmite)}>
              <label htmlFor='name'><h2>Full Name</h2></label>
              
              <input name='name' placeholder='Enter Your Full Name' type='text' {...register('Names')}/>
              <p className='mssg'> { errors.Names?.message}</p>
              <label htmlFor='Email'><h2>Email</h2></label>
              <input name='Email' placeholder='Enter Your Full Email' type='email'  {...register('Emails')}/>
              <p className='mssg'> { errors.Emails?.message}</p>

              <label htmlFor='number'><h2>Contact</h2></label>
              
              <input name='name' placeholder='Enter Your Full Contact' type='text'  {...register('Contacts')}/>
              <p className='mssg'> { errors.Contacts?.message}</p>

              
              <label htmlFor='Massage'><h2>Massage</h2></label>
              
              <textarea rows='8'  {...register('TEXTS')}></textarea>
                            <p className='mssg'> { errors.TEXTS?.message}</p>

              
              <div> <button type='submite'> submite</button></div>



            </form>
        </div>

    </div></div>
  )
}

export default ContactForms