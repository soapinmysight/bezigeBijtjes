// Import AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to save a string value in AsyncStorage
export const saveString = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
        return true;
    } catch (error) {
        return false;
    }
};

// Function to save any value (after converting to string) in AsyncStorage
export const save = async (key, value) =>
    saveString(key, JSON.stringify(value));

// Function to get a value from AsyncStorage
export const get = async key => {
    try {
        const itemString = await AsyncStorage.getItem(key);
        if (itemString) {
            return JSON.parse(itemString);
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
};

// Exporting functions so we can use them in other files
export default {
    saveString,
    save,
    get,
};
