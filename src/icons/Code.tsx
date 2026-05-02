import { CodeIcon as CodeBoldIcon } from "../bold/Code";
import { CodeIcon as CodeDuotoneIcon } from "../duotone/Code";
import { CodeIcon as CodeFillIcon } from "../fill/Code";
import { CodeIcon as CodeLightIcon } from "../light/Code";
import { CodeIcon as CodeRegularIcon } from "../regular/Code";
import { CodeIcon as CodeThinIcon } from "../thin/Code";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CodeThinIcon,
	light: CodeLightIcon,
	regular: CodeRegularIcon,
	bold: CodeBoldIcon,
	fill: CodeFillIcon,
	duotone: CodeDuotoneIcon,
} as const;

export function CodeIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CodeIcon as Code };
