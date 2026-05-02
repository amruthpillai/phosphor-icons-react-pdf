import { JoystickIcon as JoystickBoldIcon } from "../bold/Joystick";
import { JoystickIcon as JoystickDuotoneIcon } from "../duotone/Joystick";
import { JoystickIcon as JoystickFillIcon } from "../fill/Joystick";
import { JoystickIcon as JoystickLightIcon } from "../light/Joystick";
import { JoystickIcon as JoystickRegularIcon } from "../regular/Joystick";
import { JoystickIcon as JoystickThinIcon } from "../thin/Joystick";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: JoystickThinIcon,
	light: JoystickLightIcon,
	regular: JoystickRegularIcon,
	bold: JoystickBoldIcon,
	fill: JoystickFillIcon,
	duotone: JoystickDuotoneIcon,
} as const;

export function JoystickIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { JoystickIcon as Joystick };
