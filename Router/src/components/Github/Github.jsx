import React, { useState } from "react";
import { useLoaderData } from "react-router";

function Github() {

  const GithubData = useLoaderData();
  console.log("git data", GithubData);
  return (
    <>
      <div className="text-center text-3xl mt-4">
        <h1>welcome to Secures Me Github Page</h1>
      </div>

      <div className="text-center m-4 p-4 text-2xl">
        <h1>Hall Of Fame's Of Developers</h1>
        <img
          src={GithubData?.avatar_url}
          alt="GitHub Profile picture"
          width={300}
        />
      </div>

        <div className="ml-2.5 text-left mt-3">
          Name of Developer: {GithubData?.name.toUpperCase()}
          <br />
          Github followers: {GithubData?.followers}
        </div>
    </>
  );
}
export default Github;

const GithubDetail = async function ({ username = "shaikh-liyakat" }) {
  console.log(username);
  const GitApiCall = await fetch(`https://api.github.com/users/${username}`);
  console.log("git api call ", GitApiCall);

  return GitApiCall.json();
};

export { GithubDetail };
