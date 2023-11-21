import React, { useContext } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { HeaderTitle, ItemSeparator } from '../components';
import { appTheme } from '../theme/appTheme';
import { casas } from '../data';
import { ThemeContext } from '../context';

export const SectionListScreen = () => {

    const { theme: { colors } } = useContext(ThemeContext);

    return (
        <View style={[appTheme.appContainer, styles.container]}>

            <SectionList
                sections={casas}
                renderItem={({ item }: any) => <Text style={{ color: colors.text }}>{item}</Text>}
                keyExtractor={(item, index) => item + index}

                ListHeaderComponent={() => <HeaderTitle title="Section List" />}
                ListFooterComponent={() => <HeaderTitle title={`Total de casas: ${casas.length}`} />}

                stickySectionHeadersEnabled
                renderSectionHeader={({ section }) => (
                    <View style={{ ...styles.headerContainer, backgroundColor: colors.background }}>
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
    },
});
