import React from 'react'
import PreviewCollection from '../preview-collection/preview-collection.component'
import SHOP_DATA from './shop.data'

class ShopPage extends React.Component {

    constructor(props) {
        super(props)


        this.state = {
            collection: SHOP_DATA
        }
    }


    render() {


        const { collection } = this.state
        return (
            <div className='shop-page'>
                {
                    collection.map(({ id, ...othercollectionProps }) => (
                        <PreviewCollection key={id} {...othercollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage