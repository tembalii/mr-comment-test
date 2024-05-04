const a = "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"

const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  // ruleid: hardcoded-github-pat
  auth: a,
});

const octokit = new Octokit({
  // ruleid: hardcoded-github-pat
  auth: "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",
});


const octokit = new Octokit({
  // ok: hardcoded-github-pat
  auth: b,
});

const octokit = new Octokit({
  // ok: hardcoded-github-pat
  auth: "ghp_Jreeeee",
});

