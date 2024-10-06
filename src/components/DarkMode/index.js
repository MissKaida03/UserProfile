import React from 'react';
import { Switch, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const DarkModeToggle = ({ toggle, isDarkMode }) => {
  return (
    <TouchableOpacity 
      style={[styles.container, isDarkMode && styles.darkContainer]} 
      onPress={toggle}
    >
      <Icon 
        name={isDarkMode ? 'light-mode' : 'dark-mode'} 
        size={24} 
        color={isDarkMode ? '#fff' : '#000'} 
        style={styles.icon} 
      />
      <Text style={[styles.label, isDarkMode && styles.darkLabel]}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </Text>
      <Switch
        onValueChange={toggle}
        value={isDarkMode}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  // Light mode 
    container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#ffe5ff', 
    margin: 20,
    borderWidth: 2,          
    borderColor: '#bf53ff',
    justifyContent: 'flex-start', 
    marginLeft: -120
  },

  label: {
    marginRight: 10,
    fontSize: 18,
    color: '#000',
  },

  // Dark mode
  darkContainer: {
    backgroundColor: '#3e3e3e', 
    borderRadius: 10,        
    borderWidth: 2,          
    borderColor: '#fe8dff',
  },
  
  darkLabel: {
    color: '#fff', 
  },

  icon: {
    marginRight: 6, 
  },
});

export default DarkModeToggle;