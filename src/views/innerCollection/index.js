import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LivingRoomImage } from '../../assets';
import { colors } from '../../variables';

const InnerCollection = () => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Image
        source={LivingRoomImage}
        resizeMode="cover"
        style={[styles.image, { width }]}
      />
      <View style={[styles.touchable, { width: width - 64 }]}>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons
            name="thumbs-up"
            size={18}
            color={colors.yellow2}
            style={{ marginRight: 8 }}
          />
          <Text style={styles.title}>Κερδίζεις περισσότερα</Text>
        </View>
        <Text style={styles.middleParagraph}>
          Είσαι μέλος του myPraktiker και γι αυτό κερδίζεις περισσότερα με τις
          αποκλειστικές προσφορές μόνο για σένα!
        </Text>
        <Text style={styles.bottomParagraph}>
          Αγόρασε προϊόντα σε καλύτερες τιμές και κέρδισε επιπλέον πόντους!
        </Text>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Δες τα προϊόντα</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InnerCollection;

const styles = StyleSheet.create({
  image: { height: 200 },
  container: { flex: 1, alignItems: 'center' },
  touchable: {
    marginTop: -20,
    borderRadius: 5,
    backgroundColor: colors.white,
    paddingRight: 62,
    paddingLeft: 24,
    paddingVertical: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 16,
    color: colors.greyMid,
  },
  middleParagraph: {
    marginBottom: 24,
  },
  bottomParagraph: {
    marginBottom: 64,
  },
  buttonText: {
    color: colors.blue,
    textDecorationLine: 'underline',
  },
});
