import { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  CHECKOUT_COSTS,
  CHECKOUT_ITEMS,
  DELIVERY_ADDRESS,
  PAYMENT_METHODS,
} from '../data/mock';
import type { RootStackScreenProps } from '../navigation/types';
import { colors } from '../theme/colors';
import { radius, spacing } from '../theme/spacing';

type Props = RootStackScreenProps<'Checkout'>;

export function CheckoutScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const [selectedPayment, setSelectedPayment] = useState('alipay');

  return (
    <View style={styles.container}>
      <View style={[styles.nav, { paddingTop: insets.top }]}>
        <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>‹</Text>
        </Pressable>
        <Text style={styles.navTitle}>结算</Text>
        <View style={styles.backPlaceholder} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scroll,
          { paddingBottom: 100 + insets.bottom },
        ]}
      >
        <Text style={styles.sectionLabel}>配送地址</Text>
        <View style={styles.addressCard}>
          <View style={styles.addressIcon}>
            <Text>📍</Text>
          </View>
          <View style={styles.addressInfo}>
            <Text style={styles.addressText}>{DELIVERY_ADDRESS.address}</Text>
            <Text style={styles.addressMeta}>
              {DELIVERY_ADDRESS.name} · {DELIVERY_ADDRESS.phone}
            </Text>
          </View>
        </View>

        <Text style={styles.sectionLabel}>订单明细</Text>
        <View style={styles.card}>
          {CHECKOUT_ITEMS.map((item, index) => (
            <View
              key={item.id}
              style={[
                styles.orderRow,
                index < CHECKOUT_ITEMS.length - 1 && styles.orderRowBorder,
              ]}
            >
              <View style={styles.orderInfo}>
                <Text style={styles.orderTitle}>{item.title}</Text>
                <Text style={styles.orderQty}>x{item.quantity}</Text>
              </View>
              <Text style={styles.orderPrice}>
                ¥{item.lineTotal.toFixed(2)}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <CostRow label="商品小计" value={CHECKOUT_COSTS.subtotal} />
          <CostRow label="包装费" value={CHECKOUT_COSTS.packaging} />
          <CostRow label="配送费" value={CHECKOUT_COSTS.delivery} />
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>合计</Text>
            <Text style={styles.totalValue}>
              ¥{CHECKOUT_COSTS.total.toFixed(2)}
            </Text>
          </View>
        </View>

        <Text style={styles.sectionLabel}>支付方式</Text>
        <View style={styles.card}>
          {PAYMENT_METHODS.map((method, index) => (
            <Pressable
              key={method.id}
              style={[
                styles.paymentRow,
                index < PAYMENT_METHODS.length - 1 && styles.paymentRowBorder,
              ]}
              onPress={() => setSelectedPayment(method.id)}
            >
              <Text style={styles.paymentIcon}>{method.icon}</Text>
              <Text style={styles.paymentLabel}>{method.label}</Text>
              <View
                style={[
                  styles.radio,
                  selectedPayment === method.id && styles.radioSelected,
                ]}
              >
                {selectedPayment === method.id && (
                  <View style={styles.radioInner} />
                )}
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      <View
        style={[styles.footer, { paddingBottom: insets.bottom + spacing.md }]}
      >
        <Pressable
          style={({ pressed }) => [styles.payBtn, pressed && styles.payBtnPressed]}
          onPress={() => {}}
        >
          <Text style={styles.payBtnText}>
            立即支付 ¥{CHECKOUT_COSTS.total.toFixed(2)}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

function CostRow({ label, value }: { label: string; value: number }) {
  return (
    <View style={styles.costRow}>
      <Text style={styles.costLabel}>{label}</Text>
      <Text style={styles.costValue}>¥{value.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  backBtn: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 32,
    color: colors.text,
    lineHeight: 34,
  },
  backPlaceholder: {
    width: 36,
  },
  navTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.text,
  },
  scroll: {
    padding: spacing.lg,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: spacing.sm,
    marginTop: spacing.md,
  },
  addressCard: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    alignItems: 'flex-start',
  },
  addressIcon: {
    marginRight: spacing.md,
    marginTop: 2,
  },
  addressInfo: {
    flex: 1,
  },
  addressText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
    lineHeight: 22,
    marginBottom: spacing.xs,
  },
  addressMeta: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    marginBottom: spacing.sm,
  },
  orderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },
  orderRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
    marginBottom: spacing.sm,
    paddingBottom: spacing.md,
  },
  orderInfo: {
    flex: 1,
    marginRight: spacing.md,
  },
  orderTitle: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 4,
  },
  orderQty: {
    fontSize: 12,
    color: colors.textMuted,
  },
  orderPrice: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
  },
  costRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.xs,
  },
  costLabel: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  costValue: {
    fontSize: 14,
    color: colors.text,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.md,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  totalValue: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
  },
  paymentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  paymentRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  paymentIcon: {
    fontSize: 22,
    marginRight: spacing.md,
  },
  paymentLabel: {
    flex: 1,
    fontSize: 15,
    color: colors.text,
  },
  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    borderColor: colors.primary,
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.primary,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
  },
  payBtn: {
    backgroundColor: colors.primary,
    borderRadius: radius.md,
    paddingVertical: spacing.lg,
    alignItems: 'center',
  },
  payBtnPressed: {
    backgroundColor: colors.primaryDark,
  },
  payBtnText: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '700',
  },
});
