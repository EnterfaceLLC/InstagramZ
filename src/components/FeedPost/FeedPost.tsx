/* eslint-disable react/react-in-jsx-scope */
import {View, Text, Image} from 'react-native';

//***COMPONENT IMPORTS BELOW***//
import Comment from '../Comment';
import {IPost} from '../../types/models';

//***STYLE IMPORTS BELOW***//
import styles from './styles';

//***THEME IMPORTS BELOW***//
import colors from '../../theme/colors';

//***ICON IMPORTS BELOW***//
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IFeedPost {
  post: IPost;
}

//***FEEDPOST CODE BELOW***//
const FeedPost = ({post}: IFeedPost) => {
  return (
    <View style={styles.post}>
      {/* HEAD */}
      <View style={styles.head}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>{post.user.username}</Text>
        <Fontisto name="move-h" size={24} style={styles.headIcon} />
      </View>

      {/* CONTENT */}
      <Image
        source={{
          uri: post.image,
        }}
        style={styles.pic}
      />

      {/* FOOT */}
      <View style={styles.foot}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={'hearto'}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>

        {/*Likes*/}
        <Text style={styles.text}>
          Liked by{' '}
          <Text style={styles.bold}>{post.comments[1].user.username}</Text> and{' '}
          <Text style={styles.bold}>{post.nofLikes} others</Text>
        </Text>

        {/*Post description*/}
        <Text style={styles.text}>
          <Text style={styles.bold}>{post.user.username}</Text>{' '}
          {post.description}
        </Text>

        {/*Comments*/}
        <Text>View all {post.nofComments} comments...</Text>
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}

        {/*Post date*/}
        <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
