import React from 'react'
import { Text, View, ImageBackground } from 'react-native'
import StyledButtons from '../StyledButtons.js'
import styles from './styles'

const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.carImage}></ImageBackground>
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.taglineCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButtons
          type="primary"
          content={'custom order'}
          onPress={() => {
            console.warn('custom order was pressed')
          }}
        />
        <StyledButtons
          type="secondary"
          content={'existing order'}
          onPress={() => {
            console.warn('existing order was pressed')
          }}
        />
      </View>
    </View>
  )
}

export default CarItem
