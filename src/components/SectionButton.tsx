import * as Tooltip from "@radix-ui/react-tooltip";
import { IconType } from "react-icons";

interface Props {
  sectionName: string;
  icon: IconType;
  label: string;
  isActive: boolean;
  onClick: (section: string) => void;
}

const SectionButton = ({
  sectionName,
  icon: Icon,
  label,
  isActive,
  onClick,
}: Props) => {
  const handleButtonClick = () => {
    onClick(sectionName);

    const section = document.getElementById(sectionName);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button
            className={`mb-2 ${isActive ? "active-section" : ""}`}
            onClick={handleButtonClick}
          >
            <Icon className="text-xl" />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="TooltipContent"
            side="right"
            sideOffset={15}
          >
            {label}
            <Tooltip.Arrow className="TooltipArrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default SectionButton;
