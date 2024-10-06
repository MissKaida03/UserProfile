import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const Avatar = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/profile-kristal.jpg')}
        style={styles.avatar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',      
    top: 160,                  
    right: 20,                 
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar: {
    width: 130,
    height: 145,
    borderRadius: 20,
    borderWidth: 2,            
    borderColor: '#fe8dff',  
  },
});

export default Avatar;
