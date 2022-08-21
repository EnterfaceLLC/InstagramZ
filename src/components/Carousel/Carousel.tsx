/* eslint-disable react/react-in-jsx-scope */
import {useRef, useState} from 'react';
import {
  View,
  Image,
  FlatList,
  useWindowDimensions,
  ViewabilityConfig,
  ViewToken,
} from 'react-native';
import colors from '../../theme/colors';
import DoublePress from '../DoublePress';

interface ICarousel {
  images: string[];
  onDoublePress?: () => void;
}

const Carousel = ({images, onDoublePress = () => {}}: ICarousel) => {
  const {width} = useWindowDimensions();
  const [activeImg, setActiveImg] = useState(0);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActiveImg(viewableItems[0].index || 0);
      }
    },
  );

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <DoublePress onDoublePress={onDoublePress}>
            <Image source={{uri: item}} style={{width, aspectRatio: 1}} />
          </DoublePress>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />

      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          justifyContent: 'center',
          bottom: 0,
          width: '100%',
        }}>
        {images.map((_, index) => (
          <View
            key={index}
            style={{
              width: 10,
              aspectRatio: 1,
              borderRadius: 5,
              backgroundColor:
                activeImg === index ? colors.primary : colors.white,
              marginVertical: 10,
              marginHorizontal: 5,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
