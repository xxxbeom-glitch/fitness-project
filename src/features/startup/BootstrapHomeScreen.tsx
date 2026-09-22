import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../design-system/tokens';
import {
  ANDROID_PACKAGE_ID,
  APP_DISPLAY_NAME,
} from '../../platform';

type BootstrapHomeScreenProps = {
  onOpenCatalog?: () => void;
};

export function BootstrapHomeScreen({
  onOpenCatalog,
}: BootstrapHomeScreenProps) {
  return (
    <View style={styles.root} testID="bootstrap-home">
      <Text style={styles.brand}>{APP_DISPLAY_NAME}</Text>
      <Text style={styles.subtitle}>
        DEV-001 bootstrap shell · Android package {ANDROID_PACKAGE_ID}
      </Text>
      {onOpenCatalog ? (
        <Pressable
          accessibilityRole="button"
          onPress={onOpenCatalog}
          style={styles.catalogButton}
          testID="open-ui-catalog"
        >
          <Text style={styles.catalogButtonLabel}>Open Debug UI Catalog</Text>
        </Pressable>
      ) : null}
      <Text style={styles.note}>
        Catalog entry is development-only and hidden outside __DEV__.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.canvas,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 12,
  },
  brand: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.brandPrimary,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  catalogButton: {
    marginTop: 12,
    backgroundColor: colors.brandAction,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
  },
  catalogButtonLabel: {
    color: colors.surface,
    fontWeight: '600',
  },
  note: {
    marginTop: 8,
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
