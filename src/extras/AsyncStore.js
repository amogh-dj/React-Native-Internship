import AsyncStorage from '@react-native-async-storage/async-storage';

export default class AsyncStore {
    async storeData(key, value){
        try {
            console.log('Storing');
            await AsyncStorage.setItem(key,  value);
        }
        catch {
            console.log('Some shit went wrong');
            return false;
        }
    }

    async getData(key) {
        try {
            console.log('Getting data');
            return await AsyncStorage.getItem(key);
        }
        catch {
            console.log('Some Shit went wrong in gettin data -------------', e);
            return false;
        }
    }
}

