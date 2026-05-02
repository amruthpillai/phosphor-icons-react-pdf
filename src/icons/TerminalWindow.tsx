import { TerminalWindowIcon as TerminalWindowBoldIcon } from "../bold/TerminalWindow";
import { TerminalWindowIcon as TerminalWindowDuotoneIcon } from "../duotone/TerminalWindow";
import { TerminalWindowIcon as TerminalWindowFillIcon } from "../fill/TerminalWindow";
import { TerminalWindowIcon as TerminalWindowLightIcon } from "../light/TerminalWindow";
import { TerminalWindowIcon as TerminalWindowRegularIcon } from "../regular/TerminalWindow";
import { TerminalWindowIcon as TerminalWindowThinIcon } from "../thin/TerminalWindow";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TerminalWindowThinIcon,
	light: TerminalWindowLightIcon,
	regular: TerminalWindowRegularIcon,
	bold: TerminalWindowBoldIcon,
	fill: TerminalWindowFillIcon,
	duotone: TerminalWindowDuotoneIcon,
} as const;

export function TerminalWindowIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TerminalWindowIcon as TerminalWindow };
