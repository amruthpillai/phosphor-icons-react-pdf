import { WechatLogoIcon as WechatLogoBoldIcon } from "../bold/WechatLogo";
import { WechatLogoIcon as WechatLogoDuotoneIcon } from "../duotone/WechatLogo";
import { WechatLogoIcon as WechatLogoFillIcon } from "../fill/WechatLogo";
import { WechatLogoIcon as WechatLogoLightIcon } from "../light/WechatLogo";
import { WechatLogoIcon as WechatLogoRegularIcon } from "../regular/WechatLogo";
import { WechatLogoIcon as WechatLogoThinIcon } from "../thin/WechatLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: WechatLogoThinIcon,
	light: WechatLogoLightIcon,
	regular: WechatLogoRegularIcon,
	bold: WechatLogoBoldIcon,
	fill: WechatLogoFillIcon,
	duotone: WechatLogoDuotoneIcon,
} as const;

export function WechatLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { WechatLogoIcon as WechatLogo };
