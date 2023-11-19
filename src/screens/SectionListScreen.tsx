import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { HeaderTitle, ItemSeparator } from '../components';
import { appTheme } from '../theme/appTheme';
import { casas } from '../data';

export const SectionListScreen = () => {
    return (
        <View style={[appTheme.appContainer, styles.container]}>

            <SectionList
                sections={casas}
                renderItem={({ item }: any) => <Text>{item}</Text>}
                keyExtractor={(item, index) => item + index}

                ListHeaderComponent={() => <HeaderTitle title="Section List" />}
                ListFooterComponent={() => <HeaderTitle title={`Total de casas: ${casas.length}`} />}

                stickySectionHeadersEnabled
                renderSectionHeader={({ section }) => (
                    <View style={styles.headerContainer}>
                        <HeaderTitle title={section.casa} />
                    </View>
                )}
                renderSectionFooter={({ section }) => (
                    <HeaderTitle title={'Total: ' + section.data.length} />
                )}
                ItemSeparatorComponent={() => <ItemSeparator />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        backgroundColor: 'white',
    },
});
