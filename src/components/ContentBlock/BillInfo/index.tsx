import { withTranslation } from "react-i18next";

interface Props {
  bills: any;
}

const BillInfo = ({ bills }: Props) => {
  return (
    <>
      (
      <a href={bills.assembly.url}>
        {bills.assembly.number}, {bills.assembly.sponsor}
      </a>
      ;{" "}
      <a href={bills.senate.url}>
        {bills.assembly.number}, {bills.assembly.sponsor}
      </a>
      )
    </>
  );
};

export default withTranslation()(BillInfo);
