import React from 'react'
import { FeatureContainer, FeatureButton } from './FeatureElements'

const Feature = () => {
  return (
    <FeatureContainer>
        <h1>Hot Deals</h1>
        <p>The latest, what's trending...& more</p>
        <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  )
}

export default Feature;