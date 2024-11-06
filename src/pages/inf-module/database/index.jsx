import { PageWrapper } from "@/components/layout/page-wrapper";
import { Title } from "@/components/layout/title";
import { TableComponent } from "./table-component";

function DataBase() {
  return (
    <PageWrapper>
      <Title title="DATABASE" />
      <TableComponent />
    </PageWrapper>
  );
}

DataBase.propTypes = {};

export default DataBase;
