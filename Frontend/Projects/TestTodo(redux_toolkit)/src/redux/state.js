import { getRandomID } from "../util/randimId";
import { write, read } from "../util/LS";

/*
export const initialState = {
 todos: [
    {
      id: getRandomID(),
      title: "",
      text: "Make dinner",
      deadLine: "11.08.2023",
      check: false,
      status: 0,
    },
    {
      id: getRandomID(),
      title: "Home",
      text: "Some else",
      deadLine: "14.08.2023",
      check: false,
      status: 0,
    },
    {
      id: getRandomID(),
      title: "Learn",
      text: "do homework",
      deadLine: "14.08.2023",
      check: false,
      status: 1,
    },
    {
      id: getRandomID(),
      title: "",
      text: "to choose a perfume",
      deadLine: "14.08.2023",
      check: true,
      status: 0,
    },
    {
      id: getRandomID(),
      title: "Learn",
      text: "2do homework",
      deadLine: "12.08.2023",
      check: false,
      status: 1,
    },
    {
      id: getRandomID(),
      title: "Learn",
      text: "3do homework",
      deadLine: "12.08.2023",
      check: false,
      status: 1,
    },
    {
      id: getRandomID(),
      title: "Learn",
      text: "4do homework",
      deadLine: "2.08.2023",
      check: false,
      status: 1,
    },
  ],
  folders: [
    { id: getRandomID(), 
      title: "Learn", 
      deadline: '25.08.2023', 
  },
    { id: getRandomID(), 
      title: "Home", 
      deadline: "03.09.2023", 
    },
    { id: getRandomID(), 
      title: "All ever", 
      deadline: "03.09.2023", 
    },
  ],
};


write("todos", initialState.todos);
write("folders", initialState.folders);

*/
const todosFromLS = read("todos", []);
const foldersfromLs = read("folders", []);

export const initialState = {
 todos: todosFromLS,
 folders: foldersfromLs,
};

