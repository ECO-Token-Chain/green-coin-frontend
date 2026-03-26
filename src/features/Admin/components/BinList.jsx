import React from 'react'
import BinCard from './BinCard.jsx'

function BinList({ dustbins }) {
  return (
    <div className='bin-list'>
      <h3>Live Bin Status</h3>

      {dustbins.map(bin => (
        <BinCard key={bin._id} bin={bin} />
      ))}
    </div>
  )
}

export default BinList