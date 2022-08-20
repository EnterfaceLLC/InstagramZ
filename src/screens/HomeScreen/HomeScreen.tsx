import {FlatList} from 'react-native';

//***COMPONENT IMPORTS BELOW***//
import FeedPost from '../../components/FeedPost';

import posts from '../../assets/data/posts.json';

//***APP CODE BELOW */
const HomeScreen = () => {
  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <FeedPost post={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default HomeScreen;
