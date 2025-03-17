# WebContainer API Starter

WebContainer API is a browser-based runtime for executing Node.js applications and operating system commands. It enables you to build applications that previously required a server running.

WebContainer API is perfect for building interactive coding experiences. Among its most common use cases are production-grade IDEs, programming tutorials, or employee onboarding platforms.

## How To

For an up-to-date documentation, please refer to [our documentation](https://webcontainers.io).

## Cross-Origin Isolation

WebContainer _requires_ [SharedArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) to function. In turn, this requires your website to be [cross-origin isolated](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements). Among other things, the root document must be served with:

```
Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Opener-Policy: same-origin
```

You can check [our article](https://blog.stackblitz.com/posts/cross-browser-with-coop-coep/) on the subject and our [docs on browser support](https://developer.stackblitz.com/docs/platform/browser-support) for more details.

## Serve over HTTPS

Please note that your deployed page must be served over HTTPS. This is not necessary when developing locally, as `localhost` is exempt from some browser restrictions, but there is no way around it once you deploy to production.

## Demo

Check [the WebContainer API demo app](https://webcontainer.new).

Here's an example `main.ts` file:

```ts
import { WebContainer } from "@webcontainer/api";

const files: FileSystemTree = {
  "index.js": {
    file: {
      contents: "",
    },
  },
};

let webcontainer: WebContainer;

// add a textarea (the editor) and an iframe (a preview window) to the document
document.querySelector("#app").innerHTML = `
  <div class="container">
    <div class="editor">
      <textarea>I am a textarea</textarea>
    </div>
    <div class="preview">
      <iframe></iframe>
    </div>
  </div>
`;

// the editor
const textarea = document.querySelector("textarea");

// the preview window
const iframe = document.querySelector("iframe");

window.addEventListener("load", async () => {
  textarea.value = files["index.js"].file.contents;

  textarea.addEventListener("input", (event) => {
    const content = event.currentTarget.value;
    webcontainer.fs.writeFile("/index.js", content);
  });

  // call only once
  webcontainer = await WebContainer.boot();

  await webcontainer.mount(files);

  const exitCode = await installDependencies();

  if (exitCode !== 0) {
    throw new Error("Installation failed");
  }

  startDevServer();
});

async function installDependencies() {
  // install dependencies
  const installProcess = await webcontainer.spawn("npm", ["install"]);

  installProcess.output.pipeTo(
    new WritableStream({
      write(data) {
        console.log(data);
      },
    })
  );

  // wait for install command to exit
  return installProcess.exit;
}

async function startDevServer() {
  // run `npm run start` to start the express app
  await webcontainer.spawn("npm", ["run", "start"]);

  // wait for `server-ready` event
  webcontainer.on("server-ready", (port, url) => {
    iframe.src = url;
  });
}
```

## Troubleshooting

Cookie blockers, either from third-party addons or built-in into the browser, can prevent WebContainer from running correctly. Check the `on('error')` event and our [docs](https://developer.stackblitz.com/docs/platform/third-party-blocker).

To troubleshoot other problems, check the [Troubleshooting page](https://webcontainers.io/guides/troubleshooting) in our docs.

# License

Copyright 2023 StackBlitz, Inc.
