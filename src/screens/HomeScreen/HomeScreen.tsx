import {FlatList, ViewabilityConfig, ViewToken} from 'react-native';
import {useRef, useState} from 'react';

//***COMPONENT IMPORTS BELOW***//
import FeedPost from '../../components/FeedPost';

//***MOCK DATA IMPORT BELOW***//
import posts from '../../assets/data/posts.json';

//***HOMESCREEN CODE BELOW */
const HomeScreen = () => {
  const [activePost, setActivePost] = useState<string | null>(null);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActivePost(viewableItems[0].item.id);
      }
    },
  );

  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <FeedPost post={item} isVisible={activePost === item.id} />}
      showsVerticalScrollIndicator={false}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged.current}
    />
  );
};

export default HomeScreen;
