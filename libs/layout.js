import { Dimensions, Platform } from 'react-native'
import ExtraDimensions from 'react-native-extra-dimensions-android'

module.exports = {
  get visibleHeight() {
    return Platform.select({
      android: ExtraDimensions.get('REAL_WINDOW_HEIGHT') - ExtraDimensions.get('SOFT_MENU_BAR_HEIGHT'),
      default: Dimensions.get('window').height
    })
  },
}
