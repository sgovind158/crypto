

import { makeStyles } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles((theme)=>({

  banner: {
    backgroundImage: "url(https://github.com/sgovind158/crypto/blob/main/cryptoworld/public/banner2.jpg)",
  },
}))



const Banner = () => {
  const {banner} = useStyles()

  return (
    <div className={banner}>
      
    </div>
  )
}

export default Banner
