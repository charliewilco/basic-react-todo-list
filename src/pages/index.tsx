import { NextPage } from "next";
import Head from "next/head";

import { useMemo, useReducer, useCallback } from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";

import { List } from "../list-view";
import { _TodoForm } from "../todo-form";
import { TodoActions, listReducer, INITIAL_LIST } from "../reducer";

const HomePage: NextPage = () => {
  const [state, dispatch] = useReducer(listReducer, {
    todos: INITIAL_LIST
  });

  const completed = useMemo(() => state.todos.filter(todo => todo.completed), [state]);
  const incompleted = useMemo(() => state.todos.filter(todo => !todo.completed), [state]);

  const handleRemove = useCallback(
    (id: string) => {
      dispatch({ type: TodoActions.REMOVE_TODO, id });
    },
    [dispatch]
  );

  const handleUndo = useCallback(
    (id: string) => {
      dispatch({ type: TodoActions.MARK_AS_NOT_COMPLETED, id });
    },
    [dispatch]
  );

  const handleCompleted = useCallback(
    (id: string) => {
      dispatch({ type: TodoActions.MARK_AS_COMPLETED, id });
    },
    [dispatch]
  );

  const handleUpdate = useCallback(
    (id: string, task: string) => {
      dispatch({ type: TodoActions.UPDATE_TODO, id, payload: task });
    },
    [dispatch]
  );

  return (
    <div className="container">
      <Head>
        <title>Basic Todo List</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <header>
        <h1>Tasks</h1>
      </header>

      <div className="flex app">
        <_TodoForm onSubmit={payload => dispatch({ type: TodoActions.ADD_TODO, payload })} />
        <Tabs className="tabs">
          <TabList className="filters">
            <Tab>All</Tab>
            <Tab>Completed</Tab>
            <Tab>Remaining</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <List
                onRemove={handleRemove}
                onUpdate={handleUpdate}
                onUndo={handleUndo}
                onCompleted={handleCompleted}
                todos={state.todos}
              />
            </TabPanel>
            <TabPanel>
              <List
                onRemove={handleRemove}
                onUpdate={handleUpdate}
                onUndo={handleUndo}
                onCompleted={handleCompleted}
                todos={completed}
              />
            </TabPanel>
            <TabPanel>
              <List
                onRemove={handleRemove}
                onUpdate={handleUpdate}
                onUndo={handleUndo}
                onCompleted={handleCompleted}
                todos={incompleted}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>

      <style jsx>{`
        h1 {
          font-weight: 700;
          font-size: 1.5rem;
        }

        .container {
          margin: 0 auto;
          padding: 0.5rem;
          max-width: 38rem;
        }

        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 2rem;
        }

        .flex {
          display: flex;
          flex-direction: column-reverse;
        }

        .app {
          min-height: calc(100vh - 2rem);
          min-height: calc(-webkit-fill-available - 2rem);
        }

        :global([data-reach-tab]) {
          border-bottom: 2px solid;
          font-weight: bold;
          flex: 1;
        }

        :global([data-reach-tab][data-selected]) {
          color: #00a3ff;
        }

        :global(.filters) {
          display: flex;
          align-items: center;
          width: 100%;
        }

        :global(.tabs) {
          flex: 2;
          display: flex;
          flex-direction: column-reverse;
          justify-content: space-between;
        }

        :global(.sr-only) {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
