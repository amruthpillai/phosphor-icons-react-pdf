import { TerminalIcon as TerminalBoldIcon } from "../bold/Terminal";
import { TerminalIcon as TerminalDuotoneIcon } from "../duotone/Terminal";
import { TerminalIcon as TerminalFillIcon } from "../fill/Terminal";
import { TerminalIcon as TerminalLightIcon } from "../light/Terminal";
import { TerminalIcon as TerminalRegularIcon } from "../regular/Terminal";
import { TerminalIcon as TerminalThinIcon } from "../thin/Terminal";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TerminalThinIcon,
	light: TerminalLightIcon,
	regular: TerminalRegularIcon,
	bold: TerminalBoldIcon,
	fill: TerminalFillIcon,
	duotone: TerminalDuotoneIcon,
} as const;

export function TerminalIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TerminalIcon as Terminal };
