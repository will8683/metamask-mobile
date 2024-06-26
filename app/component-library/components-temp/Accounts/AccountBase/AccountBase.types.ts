import { BadgeProps } from '../../../components/Badges/Badge/Badge.types';

export interface AccountBaseProps {
  /**
   * Available balance of the account in native currency.
   */
  accountBalance?: number;
  /**
   * Available balance of the account for a token, formatted string.
   */
  accountTokenBalance?: string;
  /**
   * Native currency of the account.
   */
  accountNativeCurrency?: string;
  /**
   * Current network of the account.
   */
  accountNetwork: string;
  /**
   * Name of the account.
   * @default 'Account 1'
   */
  accountName: string;
  /**
   * Action balance title
   */
  accountBalanceLabel: string;
  /**
   * Account address
   */
  accountAddress: string;
  /**
   * Avatar wrapper props
   */
  badgeProps: BadgeProps;
  /**
   * i18n string of account type label
   */
  accountTypeLabel?: string;
  /**
   * Account identicon
   */
  useBlockieIcon: boolean;
}
