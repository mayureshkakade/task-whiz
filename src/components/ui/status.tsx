import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./select";
import { Circle } from "lucide-react";
import { FC } from "react";
import { getStatusClass, getStatusText } from "@/lib/utils";

export enum StatusOption {
  TODO = "todo",
  IN_PROGRESS = "in_progress",
  DONE = "done",
}

export interface StatusDropdownProps {
  currentStatus: StatusOption;
  updateTaskStatus: (status: StatusOption) => void;
}

export interface StatusProps {
  status: StatusOption;
}

const StatusDropdown: FC<StatusDropdownProps> = ({
  currentStatus,
  updateTaskStatus,
}) => {
  const onDropdownChange = (value: StatusOption) => {
    updateTaskStatus(value);
  };

  return (
    <Select onValueChange={onDropdownChange} value={currentStatus}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={getStatusText(currentStatus)} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={StatusOption.TODO} className="text-blue-500">
          {getStatusText(StatusOption.TODO)}
        </SelectItem>
        <SelectItem
          value={StatusOption.IN_PROGRESS}
          className="text-orange-400"
        >
          {getStatusText(StatusOption.IN_PROGRESS)}
        </SelectItem>
        <SelectItem value={StatusOption.DONE} className="text-green-500">
          {getStatusText(StatusOption.DONE)}
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

const Status: FC<StatusProps> = ({ status }) => {
  return (
    <div className="flex items-center gap-2 h-10">
      <Circle
        className={`w-4 h-4 mr-1 text-zinc-500 ${getStatusClass(status)}`}
      />
      <span className="text-zinc-800 font-semibold">
        {getStatusText(status)}
      </span>
    </div>
  );
};

StatusDropdown.displayName = "StatusDropdown";
Status.displayName = "Status";

export { StatusDropdown, Status };
