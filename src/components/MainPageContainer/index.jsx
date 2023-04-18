import React from 'react'
import CatalogueBlock from '../CatalogueBlock'
import DiscountBlock from '../DiscountBlock'
import MainFirstBlock from '../MainFirstBlock'
import SaleBlock from '../SaleBLock'

export default function MainPageContainer() {
  return (
    <div>
        <MainFirstBlock />
        <CatalogueBlock />
        <DiscountBlock />
        <SaleBlock />
    </div>
  )
}
