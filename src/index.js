import { Screen, Router, div, img, a, p, header, style } from "naxtjs";
const h = async function () {
  console.log(this._params);
  return div(
    { className: "App" },
    header(
      { className: "App-header" },
      img({ src: "/src/naxt.png", className: "App-logo", alt: "logo" }),
      p("Edit <code>src/index.js</code> and save and reload."),
      a(
        {
          className: "App-link",
          href: "/",
          target: "_blank",
          rel: "noopener noreferrer",
          onclick() {
            console.log("hello people of the world");
          },
        },
        "Hello Thomas"
      )
    ),
    // a simple way to add styles
    style(`
    html, body {
      padding: 0;
      margin: 0;
    }
    .App {
  text-align: center;
}
.App-logo {
  height: 40vmin;
  pointer-events: none;
}
.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}
.App-link {
  color: #61dafb;
}
    `)
  );
};

const s = new Screen({
  name: "Naxtjs ssr",
  template: h,
  persist: false,
});
Router.BrowserRoutes({ "/home/:user": s });
Router.BrowserRoutes({ "/": s });
Router.listen({ debug: true });

// example visit http://127.0.0.1:3000/home/john
