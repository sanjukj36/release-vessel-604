import PropTypes from "prop-types";
import { BoxCard } from "@/components/common/BoxCard";
import { ReadOnlyInput } from "@/components/common/ReadOnlyInput";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

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
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};
export function ThrusterCard({ title, data, icon }) {
  return (
    <BoxCard>
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
              {item.unit === undefined ? (
                <Switch className="ml-auto" checked={item.value} />
              ) : (
                <>
                  <ReadOnlyInput value={item.value} />
                  <p className="min-w-[3em] text-end">{item.unit}</p>
                </>
              )}
            </div>
          ))}
      </CardContent>
    </BoxCard>
  );
}
