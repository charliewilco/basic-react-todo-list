import * as React from "react";
import Head from "next/head";
import { ListView } from "../list-view";

export default function IndexPage() {
  return (
    <div className="Container">
      <Head>
        <title>Basic Todo List</title>
      </Head>
      <h1>Tasks</h1>
      <ListView />
    </div>
  );
}
