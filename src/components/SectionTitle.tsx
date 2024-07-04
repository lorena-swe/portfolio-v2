import "./SectionTitle.css";

interface Props {
  sectionNumber: string;
  name: string;
}

const SectionTitle = ({ sectionNumber, name }: Props) => {
  return (
    <div className="flex flex-row items-center">
      <div className="section-number">{sectionNumber}.</div>
      <div className="section-name">{name}</div>
    </div>
  );
};

export default SectionTitle;
