import { WebhooksLogoIcon as WebhooksLogoBoldIcon } from "../bold/WebhooksLogo";
import { WebhooksLogoIcon as WebhooksLogoDuotoneIcon } from "../duotone/WebhooksLogo";
import { WebhooksLogoIcon as WebhooksLogoFillIcon } from "../fill/WebhooksLogo";
import { WebhooksLogoIcon as WebhooksLogoLightIcon } from "../light/WebhooksLogo";
import { WebhooksLogoIcon as WebhooksLogoRegularIcon } from "../regular/WebhooksLogo";
import { WebhooksLogoIcon as WebhooksLogoThinIcon } from "../thin/WebhooksLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WebhooksLogoThinIcon,
	light: WebhooksLogoLightIcon,
	regular: WebhooksLogoRegularIcon,
	bold: WebhooksLogoBoldIcon,
	fill: WebhooksLogoFillIcon,
	duotone: WebhooksLogoDuotoneIcon,
} as const;

export function WebhooksLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WebhooksLogoIcon as WebhooksLogo };
