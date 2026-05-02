import { AxeIcon as AxeBoldIcon } from "../bold/Axe";
import { AxeIcon as AxeDuotoneIcon } from "../duotone/Axe";
import { AxeIcon as AxeFillIcon } from "../fill/Axe";
import { AxeIcon as AxeLightIcon } from "../light/Axe";
import { AxeIcon as AxeRegularIcon } from "../regular/Axe";
import { AxeIcon as AxeThinIcon } from "../thin/Axe";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AxeThinIcon,
	light: AxeLightIcon,
	regular: AxeRegularIcon,
	bold: AxeBoldIcon,
	fill: AxeFillIcon,
	duotone: AxeDuotoneIcon,
} as const;

export function AxeIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AxeIcon as Axe };
