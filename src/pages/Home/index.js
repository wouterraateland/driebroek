import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

import { getAllIds } from 'selectors/products'

import kick from 'media/kick.jpg'
import mountain from 'media/mountain.jpg'
import dive from 'media/dive.gif'

import Columns from 'components/Columns'
import Product from 'components/Product'
import Spotlight from 'components/Spotlight'

const Home = ({ productIds }) => (
  <div className="Home wrapper">
    <Columns>
      <Spotlight
        image={kick}
        title="Hi there, you!"
        content="Welcome to a new level of comfort and unrestricted movement. You just found your one and only best fitting pants ever."
        action={{
          text: "About us",
          to: "/about"
        }}/>
      <div className="Home-product">
        <Product productId={productIds[0]} />
      </div>
      <div className="Home-product">
        <Product productId={productIds[1]} />
      </div>
      <Spotlight
        image={mountain}
        title="We love being in beautiful nature"
        content="And we know that you'll love being in nature wearing our pants even more." />
      <Spotlight
        title="Check out all our products"
        content="We've got your favourite for sure."
        action={{
          text: "All Products",
          to: "/products"
        }} />
      <div className="Home-product">
        <Product productId={productIds[2]} />
      </div>
      <div className="Home-product">
        <Product productId={productIds[3]} />
      </div>
      <Spotlight
        image={dive}
        title="Enjoy your freedom"
        content="Our pants are created for unrestricted movement and endless comfort. You'll enjoy them, we promise."/>
    </Columns>
  </div>
)

const mapStateToProps = (state) => ({
  productIds: getAllIds(state),
})

export default connect(
  mapStateToProps
)(Home)
