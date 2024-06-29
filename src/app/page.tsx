"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlusIcon, FilterIcon } from "lucide-react";
import { Task } from "@/components/ui/task";
import { FilterDropdownButton } from "@/components/ui/filter";
import { StatusOption } from "@/components/ui/status";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center m-6 md:m-32 p-6 md:p-16 pt-4 md:pt-8 border-2 border-zinc-100 rounded-2xl shadow-lg bg-white">
      <div className="flex h-16 w-full items-center flex-nowrap gap-4 justify-between">
        <Button size="icon" className="md:w-auto md:pl-4 md:pr-3 bg-zinc-600">
          <span className="hidden md:inline">New Task</span>
          <PlusIcon className="w-6 h-4 md:w-5 md:h-5 md:ml-1" />
        </Button>
        <h1 className="md:text-4xl text-2xl font-extrabold text-center">
          TASK WHIZ
        </h1>
        {/* TODO: Add a onUpdateFilter prop to the FilterDropdownButton component */}
        <FilterDropdownButton onUpdateFilter={() => {}} />
      </div>
      <hr className="border-t-2 border-zinc-300 my-1 md:my-4 mb-4 md:mb-7 w-full"></hr>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-4">
        <Task
          description="1Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum eaque nesciunt natus saepe repudiandae voluptatum quos quo possimus illo labore sequi."
          status={StatusOption.TODO}
          title="Task 1"
        />

        <Task
          description="2Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum eaque nesciunt natus saepe repudiandae voluptatum quos quo possimus illo labore sequi."
          status={StatusOption.TODO}
          title="Task 1"
        />
        <Task
          description="3Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum eaque nesciunt natus saepe repudiandae voluptatum quos quo possimus illo labore sequi."
          status={StatusOption.TODO}
          title="Task 1"
        />
        <Task
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum eaque nesciunt natus saepe repudiandae voluptatum quos quo possimus illo labore sequi."
          status={StatusOption.TODO}
          title="Task 1"
        />
        <Task
          description="Lorem ipsum dolor  elit. Laborum eaque nesciunt natus saepe repudiandae voluptatum quos quo possimus illo labore sequi."
          status={StatusOption.TODO}
          title="Task 1"
        />
        <Task
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. ui."
          status={StatusOption.TODO}
          title="Task 1"
        />
        <Task
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum eaque nesciunt natus saepe repudiandae voluptatum quos quo"
          status={StatusOption.TODO}
          title="Task 1"
        />
        <Task
          description="3Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum eaque nesciunt natus saepe repudiandae voluptatum quos quo possimus illo labore sequi."
          status={StatusOption.TODO}
          title="Task 1"
        />
      </div>
    </main>
  );
}
