import { CodeBlockIcon as CodeBlockBoldIcon } from "../bold/CodeBlock";
import { CodeBlockIcon as CodeBlockDuotoneIcon } from "../duotone/CodeBlock";
import { CodeBlockIcon as CodeBlockFillIcon } from "../fill/CodeBlock";
import { CodeBlockIcon as CodeBlockLightIcon } from "../light/CodeBlock";
import { CodeBlockIcon as CodeBlockRegularIcon } from "../regular/CodeBlock";
import { CodeBlockIcon as CodeBlockThinIcon } from "../thin/CodeBlock";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CodeBlockThinIcon,
	light: CodeBlockLightIcon,
	regular: CodeBlockRegularIcon,
	bold: CodeBlockBoldIcon,
	fill: CodeBlockFillIcon,
	duotone: CodeBlockDuotoneIcon,
} as const;

export function CodeBlockIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CodeBlockIcon as CodeBlock };
