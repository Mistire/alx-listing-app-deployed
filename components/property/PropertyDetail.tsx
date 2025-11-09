import { PropertyProps } from '@/interfaces';
import React from 'react'

interface PropertyDetailProps {
  property: PropertyProps;
}

const PropertyDetail: React.FC<PropertyDetailProps> = () => {
  return (
    <div>PropertyDetail</div>
  )
}

export default PropertyDetail