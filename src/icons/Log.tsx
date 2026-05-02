import { LogIcon as LogBoldIcon } from "../bold/Log";
import { LogIcon as LogDuotoneIcon } from "../duotone/Log";
import { LogIcon as LogFillIcon } from "../fill/Log";
import { LogIcon as LogLightIcon } from "../light/Log";
import { LogIcon as LogRegularIcon } from "../regular/Log";
import { LogIcon as LogThinIcon } from "../thin/Log";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LogThinIcon,
	light: LogLightIcon,
	regular: LogRegularIcon,
	bold: LogBoldIcon,
	fill: LogFillIcon,
	duotone: LogDuotoneIcon,
} as const;

export function LogIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LogIcon as Log };
