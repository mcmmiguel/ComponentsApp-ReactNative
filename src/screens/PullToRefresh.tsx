import React, { useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { HeaderTitle } from '../components';
import { appTheme } from '../theme/appTheme';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const PullToRefresh = () => {

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();

    // const { top } = useSafeAreaInsets();

    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            console.log('done');
            setRefreshing(false);
            setData('Hola mundo');
        }, 1500);
    };

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10} //Solo funciona en Android
                    progressBackgroundColor="#5856d6"
                    colors={['white', 'yellow']} //Solo funciona en Android
                    // style={{ backgroundColor: '#5856d6' }} //Solo iOS
                    tintColor="white" // Solo iOS
                    title="Refreshing" // Solo iOS
                    titleColor="white" // Solo iOS
                />
            }
            style={{
                // marginTop: refreshing ? top : 0,
            }}
        >
            <View style={appTheme.appContainer}>
                <HeaderTitle title="PullToRefresh" />
                <HeaderTitle title={data ? data : ''} />
            </View>
        </ScrollView>
    );
};
