import React from 'react'; // Import React
import { AuroraEffect } from '@/components/AuroraEffect';

function page() {
  return (
    <div>
      <div>
        <AuroraEffect 
        slogan="Building Brands, Building Futures" 
        text="Guiding companies through the branding process to create strong foundations for long-term growth."
        btnText='Get started'
        location="/gallery"
        />
      </div>
    </div>
  )
}

export default page