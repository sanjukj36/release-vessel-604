import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { BoxCard } from "@/components/common/BoxCard";
import { ReadOnlyInput } from "@/components/common/ReadOnlyInput";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { RESPONSE_DATA_TYPE } from "@/lib/constants";

ThrusterCard.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      unit: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number
      ])
    })
  ),
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  className: PropTypes.string,
  variant: PropTypes.string,
  loading: PropTypes.bool
};
export function ThrusterCard({
  title,
  data,
  icon,
  className,
  variant = "default",
  loading
}) {
  return (
    <BoxCard
      loading={loading}
      className={twMerge("", className)}
      variant={variant}
    >
      {title && (
        <CardHeader className="p-2">
          <CardTitle className="flex gap-2 items-center">
            <div className="text-xl">{icon}</div>
            {title}
          </CardTitle>
        </CardHeader>
      )}
      <CardContent className="p-2 pt-0">
        {data?.length > 0 &&
          data?.map((item, key) => (
            <div
              key={key}
              className="text-sm flex w-full border-b border-b-primary/10 py-2 items-center"
            >
              <p>{item.title}</p>
              {item.data_type === RESPONSE_DATA_TYPE.bool ? (
                <Switch className="ml-auto" checked={item.value} />
              ) : (
                <>
                  <ReadOnlyInput value={item.value} />
                  <p className="min-w-[2em] text-end">{item.unit}</p>
                </>
              )}
            </div>
          ))}
      </CardContent>
    </BoxCard>
  );
}
