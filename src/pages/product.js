import React from 'react';

import 'react-native-get-random-values'
import { WebView } from 'react-native-webview'

function Product({route}) {
    return (
        <WebView source={{uri: route.params.product.url}} />
    )
}

export default Product;