import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons'

const Product = () => {
  return (
    <div>
        <Card className={classes.root}>
            <CardMedia className={classes.media} />
        </Card>
    </div>
  )
}

export default Product
