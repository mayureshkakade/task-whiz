import { Task } from "@/lib/types";
import { use, useCallback, useEffect, useState } from "react";

export const useTasksData = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[] | null>(null);
  const [currentFilter, setCurrentFilter] = useState<string>("");

  const applyTaskFilter = useCallback(
    (status: string) => {
      const filteredTasks = tasks.filter((task) => task.status === status);
      setFilteredTasks(filteredTasks.length > 0 ? filteredTasks : null);
      setCurrentFilter(status);
    },
    [tasks]
  );

  const fetchTasks = async () => {
    const response = await fetch("/api/tasks");
    const data = await response.json();
    setTasks(data.tasks);
  };

  useEffect(() => {
    applyTaskFilter(currentFilter);
  }, [tasks, currentFilter, applyTaskFilter]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/tasks");
      const data = await response.json();
      setTasks(data.tasks);
    };
    fetchData();
  }, []);

  return { tasks: filteredTasks ?? tasks, fetchTasks, applyTaskFilter };
};
