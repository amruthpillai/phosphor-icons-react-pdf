import { WalletIcon as WalletBoldIcon } from "../bold/Wallet";
import { WalletIcon as WalletDuotoneIcon } from "../duotone/Wallet";
import { WalletIcon as WalletFillIcon } from "../fill/Wallet";
import { WalletIcon as WalletLightIcon } from "../light/Wallet";
import { WalletIcon as WalletRegularIcon } from "../regular/Wallet";
import { WalletIcon as WalletThinIcon } from "../thin/Wallet";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WalletThinIcon,
	light: WalletLightIcon,
	regular: WalletRegularIcon,
	bold: WalletBoldIcon,
	fill: WalletFillIcon,
	duotone: WalletDuotoneIcon,
} as const;

export function WalletIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WalletIcon as Wallet };
