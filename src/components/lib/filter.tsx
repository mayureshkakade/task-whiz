"use client";

import { FC, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { FilterIcon } from "lucide-react";
import { StatusOption } from "./status";
import { getStatusText } from "@/lib/utils";

export interface FilterDropdownProps {
  onUpdateFilter: (filter: StatusOption | "") => void;
}

const isStatusOption = (value: string): value is StatusOption => {
  return Object.values(StatusOption).includes(value as StatusOption);
};

const FilterDropdownButton: FC<FilterDropdownProps> = () => {
  const [filter, setFilter] = useState<StatusOption | "">("");
  const onFilterChange = (value: string) => {
    if (isStatusOption(value)) {
      setFilter(value);
    } else {
      setFilter("");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          className="md:w-auto md:pl-4 md:pr-3 focus:ring-0 focus:ring-offset-0 focus:outline-none bg-zinc-600 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
        >
          <span className="hidden md:inline">Filter</span>
          <FilterIcon className="w-6 h-4 md:w-5 md:h-5 md:ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select Status</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={filter} onValueChange={onFilterChange}>
          <DropdownMenuRadioItem value={""}>All</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value={StatusOption.TODO}>
            {getStatusText(StatusOption.TODO)}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value={StatusOption.IN_PROGRESS}>
            {getStatusText(StatusOption.IN_PROGRESS)}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value={StatusOption.DONE}>
            {getStatusText(StatusOption.DONE)}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

FilterDropdownButton.displayName = "FilterDropdown";
export { FilterDropdownButton };
