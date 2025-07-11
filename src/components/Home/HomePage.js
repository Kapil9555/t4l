import React from 'react'
import Layout from '../Layout/Layout'
import HeroSection from './HeroSection'
import FeatureBannerSection from './FeatureBannerSection'
import ProductsListScroll from './ProductsListScroll'
import ChooseTheBest from './ChooseTheBest'
import SomethingNewSection from './SomethingNewSection'
import ModernCollection from './ModernCollection'
import AccessoriesGrid from './AccessoriesGrid'
import HighlightCards from './HighlightCards'

const HomePage = () => {
  return (
    <Layout>
        <HeroSection/>
        <FeatureBannerSection/>
        <ProductsListScroll/>
        <ChooseTheBest/>
        <SomethingNewSection/>
        <ModernCollection/>
        <AccessoriesGrid/>
        <HighlightCards/>
    </Layout>
  )
}

export default HomePage
