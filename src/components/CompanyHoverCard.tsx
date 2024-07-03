import * as HoverCard from "@radix-ui/react-hover-card";
import deloitteLogo from "../assets/deloitte_logo_rounded.jpg";
import amazonLogo from "../assets/amazon_logo.jpg";
import salesforceLogo from "../assets/salesforce_logo.jpg";
import noLogo from "../assets/question.png";
import LinkedinButton from "./LinkedinButton";

interface Props {
  label: string;
  description: string;
  followersCount: string;
  employeesCount: string;
  link: string;
}

const logosMap = [
  {
    label: "Deloitte",
    img: deloitteLogo,
  },
  {
    label: "Salesforce Industries",
    img: salesforceLogo,
  },
  {
    label: "Amazon",
    img: amazonLogo,
  },
];

const getImageByLabel = (label: string) => {
  const logo = logosMap.find((item) => item.label === label);
  return logo ? logo.img : null;
};

const CompanyHoverCard = ({
  label,
  description,
  followersCount,
  employeesCount,
  link,
}: Props) => {
  const companyLogo = getImageByLabel(label);

  return (
    <HoverCard.Root>
      <HoverCard.Trigger className="cursor-pointer">
        @&nbsp;{label}
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content className="HoverCardContent" sideOffset={5}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 15,
            }}
          >
            <img
              className="Image large"
              src={companyLogo || noLogo}
              alt={`${label} Logo`}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 15,
              }}
            >
              <div>
                <div className="Text bold">{label}</div>
                <LinkedinButton link={link} />
              </div>
            </div>
          </div>
          <div className="Text company-desc my-3">{description}</div>
          <div style={{ display: "flex", gap: 15 }}>
            <div style={{ display: "flex", gap: 5 }}>
              <div className="Text bold">{followersCount}</div>{" "}
              <div className="Text faded">Followers</div>
            </div>
            <div style={{ display: "flex", gap: 5 }}>
              <div className="Text bold">{employeesCount}</div>{" "}
              <div className="Text faded">Employees</div>
            </div>
          </div>

          <HoverCard.Arrow className="HoverCardArrow" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};

export default CompanyHoverCard;
