import React from 'react'
import { Text, View, ImageBackground, Pressable } from 'react-native'
import styles from './styles'

const StyledButtons = (props) => {
  const { type, content, onPress } = props
  const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6'
  const textColor = type === 'primary' ? '#ffffff' : '#171A20'

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  )
}

export default StyledButtons
