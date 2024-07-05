import { Task } from "@/lib/types";
import { useEffect, useState } from "react";

export const useTasksData = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[] | null>(null);

  const applyTaskFilter = (status: string) => {
    const filteredTasks = tasks.filter((task) => task.status === status);
    setFilteredTasks(filteredTasks.length > 0 ? filteredTasks : null);
  };

  const fetchTasks = async () => {
    const response = await fetch("/api/tasks");
    const data = await response.json();
    setTasks(data.tasks);
  };

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
