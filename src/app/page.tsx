"use client";

import { FilterDropdownButton } from "@/components/lib/filter";
import { Lobster } from "next/font/google";
import { cn } from "@/lib/utils";
import { NewTaskDialog } from "@/components/lib/new-task-dialog";
import { Task } from "@/components/lib/task";
import { useTasksData } from "@/hooks/useTasksData";

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
});

export default function Home() {
  const { tasks, fetchTasks, applyTaskFilter } = useTasksData();

  return (
    <main className="flex min-h-screen flex-col items-center m-6 md:m-32 p-6 md:p-16 pt-4 md:pt-8 border-2 border-zinc-100 rounded-2xl shadow-lg bg-white">
      <div className="flex h-16 w-full items-center flex-nowrap gap-4 justify-between">
        <NewTaskDialog fetchTasks={fetchTasks} />
        <h1
          className={cn([
            lobster.className,
            "xl:text-5xl sm:text-4xl text-3xl font-extrabold text-center",
          ])}
        >
          Task Whiz
        </h1>
        {/* TODO: Add a onUpdateFilter prop to the FilterDropdownButton component */}
        <FilterDropdownButton onUpdateFilter={applyTaskFilter} />
      </div>
      <hr className="border-t-2 border-zinc-300 my-1 md:my-4 mb-4 md:mb-7 w-full"></hr>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-4 self-start w-full">
        {tasks.map(({ id, title, description, status }) => (
          <Task
            key={id}
            description={description ?? ""}
            status={status}
            title={title}
          />
        ))}
      </div>
    </main>
  );
}
