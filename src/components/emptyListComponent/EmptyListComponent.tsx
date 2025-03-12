import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { TEXTS } from '../../constants/texts.constants';
import { makeStyles } from './EmptyListComponent.styles';

const CustomHeader = () => {
  const styles = makeStyles();
  const { t } = useTranslation();

  return (
    <View style={styles.emptyView} testID="empty-list">
      <Text>{t(TEXTS.homeUserSearch.emptyResult)}</Text>
    </View>
  );
};

export default React.memo(CustomHeader);
