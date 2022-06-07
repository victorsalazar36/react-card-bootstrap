import React from 'react'

import './cards.css'


const Card = ({title, imageSource, url}) => {
  return (
    <div className='card text-center bg-dark animate__animated animate__fadeInUp'>
      <div className='overflow'>
      <img src={imageSource} alt="" className='card-img-top'/>
      </div>
      <div className='card-body text-light'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text text-secondary'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti dolorum et cumque perferendis, obcaecati dolor rerum odit, reprehenderit tempore quibusdam esse maxime unde molestias, deleniti numquam ipsum autem distinctio fugit.
        </p>
        <a href={url} className='btn btn-outline-secondary rounded-0' target='_blank' rel="noreferrer">Go to this website</a>
      </div>
    </div>
  )
}

export default Card