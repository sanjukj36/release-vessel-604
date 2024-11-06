import { useEffect, useState } from "react";
import { RefreshCcw } from "lucide-react";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Title } from "@/components/layout/title";
import { Button } from "@/components/ui/button";
import miscellaneousApi from "@/infrastructure/miscellaneous";
import { useStore } from "@/store/miscellaneous";
import { DataList } from "./data-list";
import { SearchComponent } from "./search-component";

function Miscellaneous() {
  const store = useStore(store => store);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMiscellaneousData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMiscellaneousData = async () => {
    setLoading(true);
    // eslint-disable-next-line no-unused-vars
    const [data, err] = await miscellaneousApi.getMiscellaneousDataAPI();
    if (data) {
      store.setData(data);
      store.setFilteredData(data);
    }
    setLoading(false);
  };
  return (
    <PageWrapper>
      <Title title="Miscellaneous" className="uppercase" />
      <div className="flex gap-2 items-center">
        <Button onClick={fetchMiscellaneousData} size="icon">
          <RefreshCcw className={loading && "animate-spin"} />
        </Button>
        <SearchComponent />
      </div>
      <DataList loading={loading} />
    </PageWrapper>
  );
}

Miscellaneous.propTypes = {};

export default Miscellaneous;
