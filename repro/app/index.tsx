import React from 'react'
import { Button, Text, View } from 'react-native'

export default function Index() {
  const [visible, setVisible] = React.useState(false);
  return (
    <View
      style={{
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
      }}
    >
      <Button title="Switch render" onPress={() => setVisible((x) => !x)} />
      <Text className="bg-red-500 p-2">Rendered initially</Text>
      {visible ? <Text className="bg-red-500 p-2">Rendered conditionally</Text> : null}
    </View>
  )
}
