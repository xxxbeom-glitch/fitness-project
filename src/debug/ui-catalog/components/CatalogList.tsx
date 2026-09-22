import { FlatList, Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../../../design-system/tokens';
import { catalogEntries, type CatalogEntry } from '../registry';

type CatalogListProps = {
  onSelect: (entry: CatalogEntry) => void;
};

export function CatalogList({ onSelect }: CatalogListProps) {
  return (
    <FlatList
      data={catalogEntries}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <Pressable
          accessibilityRole="button"
          onPress={() => onSelect(item)}
          style={styles.row}
          testID={`catalog-entry-${item.id}`}
        >
          <Text style={styles.group}>{item.group}</Text>
          <Text style={styles.frame}>{item.frameName}</Text>
          <Text style={styles.meta}>
            {item.stateLabel} · {item.description}
          </Text>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
    gap: 12,
  },
  row: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.borderSubtle,
    padding: 16,
    gap: 4,
  },
  group: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  frame: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  meta: {
    fontSize: 13,
    color: colors.textSecondary,
  },
});
