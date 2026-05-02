import { SnowflakeIcon as SnowflakeBoldIcon } from "../bold/Snowflake";
import { SnowflakeIcon as SnowflakeDuotoneIcon } from "../duotone/Snowflake";
import { SnowflakeIcon as SnowflakeFillIcon } from "../fill/Snowflake";
import { SnowflakeIcon as SnowflakeLightIcon } from "../light/Snowflake";
import { SnowflakeIcon as SnowflakeRegularIcon } from "../regular/Snowflake";
import { SnowflakeIcon as SnowflakeThinIcon } from "../thin/Snowflake";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SnowflakeThinIcon,
	light: SnowflakeLightIcon,
	regular: SnowflakeRegularIcon,
	bold: SnowflakeBoldIcon,
	fill: SnowflakeFillIcon,
	duotone: SnowflakeDuotoneIcon,
} as const;

export function SnowflakeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SnowflakeIcon as Snowflake };
