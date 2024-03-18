function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
} // Made by Yago Estévez (Twitter: @yagoestevez.com) // thanks for yago | yogi

/***********************
  Menu Component
 ***********************/

const Menu = (props) => {
  return React.createElement(
    "div",
    { className: `menu-container ${props.showMenu}` },
    React.createElement("div", { className: "overlay" }),
    React.createElement(
      "div",
      { className: "menu-items" },
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "#welcome-section", onClick: props.toggleMenu },
            "HOME",
          ),
        ),

        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "#about", onClick: props.toggleMenu },
            "ABOUT",
          ),
        ),

        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "#projects", onClick: props.toggleMenu },
            "PORTFOLIO",
          ),
        ),

        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "#contact", onClick: props.toggleMenu },
            "CONTACT",
          ),
        ),
      ),

      React.createElement(SocialLinks, null),
    ),
  );
};

/***********************
     Nav Component
    ***********************/

const Nav = (props) => {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "nav",
      { id: "navbar" },
      React.createElement(
        "div",
        { className: "nav-wrapper" },
        React.createElement(
          "p",
          { className: "brand" },
          "yogi arif",

          React.createElement("strong", null, " widodo"),
        ),

        React.createElement(
          "a",
          {
            onClick: props.toggleMenu,
            className:
              props.showMenu === "active"
                ? "menu-button active"
                : "menu-button",
          },

          React.createElement("span", null),
        ),
      ),
    ),
  );
};

/***********************
     Header Component
    ***********************/

const Header = (props) => {
  return React.createElement(
    "header",
    { id: "welcome-section" },
    React.createElement("div", { className: "forest" }),
    React.createElement("div", { className: "silhouette" }),
    React.createElement("div", { className: "moon" }),
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "h1",
        null,
        React.createElement("span", { className: "line" }, "I specialize"),
        React.createElement(
          "span",
          { className: "line" },
          React.createElement("span", { className: "color" }, "HRD Dreams"),
          "",
        ),
        React.createElement(
          "span",
          { className: "line" },
          " (entire department)",
        ),
      ),

      React.createElement(
        "div",
        { className: "buttons" },
        React.createElement("a", { href: "#projects" }, "my portfolio"),
        React.createElement(
          "a",
          { href: "#contact", className: "cta" },
          "get in touch",
        ),
      ),
    ),
  );
};

/***********************
     About Component
    ***********************/

const About = (props) => {
  return React.createElement(
    "section",
    { id: "about" },
    React.createElement(
      "div",
      { className: "wrapper" },
      React.createElement(
        "article",
        null,
        React.createElement(
          "div",
          { className: "title" },
          React.createElement("h3", null, "Who's this guy?"),
          React.createElement("h3", null, "( 2017 - 2020 )"),
          React.createElement("p", { className: "separator" }),
        ),

        React.createElement(
          "div",
          { className: "desc full" },
          React.createElement(
            "h4",
            { className: "subtitle" },
            "My name is Yogi.",
          ),
          React.createElement(
            "p",
            null,
            "I am a Full Stack Developer proficient in web and Android development. I have a passion for backend services, particularly with Lumen API.",
          ),

          React.createElement(
            "p",
            null,
            "I thoroughly enjoy maintaining and solving problems, as well as creating visually appealing and user-friendly interfaces. I have an insatiable appetite for learning new things; the more, the better. In addition to my love for coding, I also have a passion for photography, a hobby I've pursued since reading the Qur'an; it helps me remember moments that are precious to me.",
          ),
        ),

        React.createElement(
          "div",
          { className: "title" },
          React.createElement("h3", null, "What does he do?"),
          React.createElement("p", { className: "separator" }),
        ),

        React.createElement(
          "div",
          { className: "desc" },
          React.createElement(
            "h4",
            { className: "subtitle" },
            "I'm a programmer.",
          ),
          React.createElement(
            "p",
            null,
            "proficient in various technologies. On the front-end, I typically utilize JavaScript, either independently or in conjunction with popular frameworks such as ReactJS and VueJS, along with styling tools like Sass and CSS. When necessary, I also incorporate frameworks like Bootstrap to enhance the visual appeal of web applications.",
          ),

          React.createElement(
            "p",
            null,
            "In terms of back-end development, I am skilled in PHP and proficient in frameworks such as WordPress and LumenAPI.",
          ),
          React.createElement(
            "p",
            null,
            "For mobile development on Android devices, I primarily use native languages like Kotlin or Java, leveraging Android Studio for development. I implement architectural patterns such as MVP or MVVM to organize and manage code effectively.",
          ),
        ),

        React.createElement(
          "div",
          { className: "desc" },
          React.createElement(
            "h4",
            { className: "subtitle" },
            "Also a designer.",
          ),
          React.createElement(
            "p",
            null,
            "I am comfortable working with various Adobe products such as Photoshop, Illustrator, and XD, which are industry standards that I thoroughly enjoy using. However, I am not limited to them; I also have experience working with other valid applications such as Gimp, Inkscape, or Figma.",
          ),
          React.createElement("h4", { className: "subtitle" }, "Hacking."),
          React.createElement(
            "p",
            null,
            "My worst habit used to be hacking and cracking, typically related to gaining unauthorized internet access, exploiting wireless security, and compromising computers. However, I have since learned about privacy, ethical hacking principles, and Cisco networks.",
          ),
        ),
      ),
    ),
  );
};

/***********************
     Project Component
    ***********************/

const Project = (props) => {
  const tech = {
    sass: "fab fa-sass",
    css: "fab fa-css3-alt",
    js: "fab fa-js-square",
    react: "fab fa-react",
    vue: "fab fa-vuejs",
    d3: "far fa-chart-bar",
    node: "fab fa-node",
  };

  const link = props.link || "http://";
  const repo = props.repo || "http://";

  return React.createElement(
    "div",
    { className: "project" },
    React.createElement(
      "a",
      {
        className: "project-link",
        href: link,
        target: "_blank",
        rel: "noopener noreferrer",
      },
      React.createElement("img", {
        className: "project-image",
        src: props.img,
        alt: "Screenshot of " + props.title,
      }),
    ),

    React.createElement(
      "div",
      { className: "project-details" },
      React.createElement(
        "div",
        { className: "project-tile" },
        React.createElement(
          "p",
          { className: "icons" },
          props.tech
            .split(" ")
            .map((t) =>
              React.createElement("i", { className: tech[t], key: t }),
            ),
        ),

        props.title,
        " ",
      ),

      props.children,
      React.createElement(
        "div",
        { className: "buttons" },
        React.createElement(
          "a",
          { href: repo, target: "_blank", rel: "noopener noreferrer" },
          "View source ",
          React.createElement("i", { className: "fas fa-external-link-alt" }),
        ),

        React.createElement(
          "a",
          { href: link, target: "_blank", rel: "noopener noreferrer" },
          "Try it Live ",
          React.createElement("i", { className: "fas fa-external-link-alt" }),
        ),
      ),
    ),
  );
};

/***********************
     Projects Component
    ***********************/

const Projects = (props) => {
  return React.createElement(
    "section",
    { id: "projects" },
    React.createElement(
      "div",
      { className: "projects-container" },
      React.createElement(
        "div",
        { className: "heading" },
        React.createElement("h3", { className: "title" }, "My Works"),
        React.createElement("p", { className: "separator" }),
        React.createElement(
          "p",
          { className: "subtitle" },
          "Here's a list of ",
          React.createElement("u", null, "most"),
          "most of the projects I've been working on lately. All of these were built during my ",
          " ",
          React.createElement(
            "a",
            {
              href: "https://www.polnes.ac.id/",
              target: "_blank",
              rel: "noopener noreferrer",
            },
            "college",
          ),
          ",  years, where I've been coding non-stop for almost 2 years until I completed all the projects.",
        ),
      ),
      React.createElement(
        "div",
        { className: "projects-wrapper" },
        React.createElement(
          Project,
          {
            title: "Rental Payment RestfullAPI",
            img: "./img/api-rentpay-2.png",
            tech: "lumen",
            link: "http://api.polnes-kmipn.com/cars",
            repo: "#private",
          },

          React.createElement("small", null, "Built using Mysql and LumenAPI"),

          React.createElement(
            "p",
            null,
            "This is a webservice that I made which lets the client read and order rental car (get and set). try live use this JWT = VlI1dU50Y3kzM1o1dzRVejB1U 2NLNnZOTjNGdEtVekRqZkd6VkphbQ== {remove whitespace between token} [source is private]. [myStartUp]",
          ),
        ),

        React.createElement(
          Project,
          {
            title: "Rental Payment Android.",
            img: "./img/rentpay-android-1.jpeg",
            tech: "kotlin java xml",
            link: "#private",
            repo: "#private",
          },

          React.createElement(
            "small",
            null,
            "Built using Kotlin & Java, C Language, Firebase & MySQL.",
          ),

          React.createElement(
            "p",
            null,
            "Have Neuro-linguistic programming (NLP) bot chat (communicate) with car, Base IoT. [myStartUp]",
          ),
        ),

        React.createElement(
          Project,
          {
            title: "Simak.",
            img: "./img/simak.png",
            tech: "Laravel Js",
            link: "#private",
            repo: "#private",
          },

          React.createElement(
            "small",
            null,
            "Built using Laravel, MySQL, JS + jQuery, CSS, SASS + Bootstrap.",
          ),
          React.createElement(
            "p",
            null,
            "Sistem Informasi Pendukung Keputusan. [source is private]. $203.11 in 7 days",
          ),
        ),
        React.createElement(
          Project,
          {
            title: "Monitoring Banjir di Samarinda Android.",
            img: "./img/s.jpeg",
            tech: "Laravel Js",
            link: "#private",
            repo: "#private",
          },

          React.createElement(
            "small",
            null,
            "Built using Kotlin & Java, C Language & Python, Firebase.",
          ),
          React.createElement(
            "p",
            null,
            "Base IoT. [source is private] [task at collage]",
          ),
        ),
        React.createElement(
          Project,
          {
            title:
              "Absen & Monitoring Kegiatan Guru & Karyawan SMK 1 Samarinda",
            img: "./img/absensi.png",
            tech: "Laravel Js",
            link: "#private",
            repo: "#private",
          },

          React.createElement(
            "small",
            null,
            "Built using Kotlin & Java, LumenAPI 5.5 & MySql.",
          ),
          React.createElement(
            "p",
            null,
            "For work from home(WFH). $101.55 in 5 days",
          ),
        ),
        React.createElement(
          Project,
          {
            title: "Bimbel Cemerlang",
            img: "./img/empty.jpg",
            tech: "reactJS",
            link: "https://bimbelcemerlang.com",
            repo: "#private",
          },

          React.createElement("small", null, "Built using CMS ( wordpress )"),
          React.createElement("p", null, "For product show. $67.70 in #"),
        ),
        React.createElement(
          Project,
          {
            title: "Tasbih Android",
            img: "./img/tasbih.png",
            tech: "reactJS",
            link: "https://deyawman.hol.es/tasbih",
            repo: "#private",
          },

          React.createElement("small", null, "Built using Kotlin - offline"),
          React.createElement("p", null, "For tasbih . [freeTime]"),
        ),

        React.createElement(
          Project,
          {
            title: "Blanjaque",
            img: "./img/blanjaque.jpeg",
            tech: "kotlin",
            link: "https://play.google.com/store/apps/details?id=com.blanjaque",
            repo: "#private",
          },

          React.createElement("small", null, "Built using kotlin, & Firebase."),
          React.createElement(
            "p",
            null,
            "I added a chatting feature for buyers and sellers, along with the implementation of their API responses. I included detailed product information for data consumption in the chat and other tasks, completing the project in 1 week and 6 days for a total of $20.47.",
          ),
        ),
        React.createElement(
          Project,
          {
            title: "yoChat polnes",
            img: "./img/yochat.png",
            tech: "reactJS",
            link: "https://play.google.com/store/apps/details?id=id.scode.yochat&hl=ms",
            repo: "#private",
          },

          React.createElement("small", null, "Built using Kotlin , Firebase"),
          React.createElement("p", null, "For education in chat . [freeTime]"),
        ),
        React.createElement(
          Project,
          {
            title: "yoChat desktop",
            img: "./img/yochat.jpg",
            tech: "reactJS",
            link: "https://play.google.com/store/apps/details?id=id.scode.yochat&hl=ms",
            repo: "#private",
          },

          React.createElement(
            "small",
            null,
            "Built using VBNET , MySQL (ODBC)",
          ),
          React.createElement(
            "p",
            null,
            "To test TCP connections of Nano Ubiquiti (Wireless Radio) with chat functionality. [Task completed during my time at Vocational High School]",
          ),
        ),
        React.createElement(
          Project,
          {
            title: "ayam desktop",
            img: "./img/ayam.png",
            tech: "reactJS",
            link: "#private",
            repo: "#private",
          },

          React.createElement(
            "small",
            null,
            "Built using JAVA Netbeans , MySQL ",
          ),
          React.createElement("p", null, "[task at collage]"),
        ),
        React.createElement(
          Project,
          {
            title: "to Excel and PDF",
            img: "./img/empty.jpg",
            tech: "reactJS",
            link: "#private",
            repo: "#private",
          },

          React.createElement("small", null, "Built using php native , MySQL"),
          React.createElement(
            "p",
            null,
            "Added a feature for POS (web) applications within 2 days.",
          ),
        ),
        React.createElement(
          "div",
          { className: "heading" },
          React.createElement("h3", { className: "title" }, "My Training"),
          React.createElement("p", { className: "separator" }),
          React.createElement(
            "p",
            { className: "subtitle" },
            "Here's a list of ",
            React.createElement("u", null, "most"),
            " most of the training I've been working on lately. All of these were completed during my ",
            " ",
            React.createElement(
              "a",
              {
                href: "https://www.polnes.ac.id/",
                target: "_blank",
                rel: "noopener noreferrer",
              },
              "college",
            ),
            ",  years, where I dedicated almost 2 years of non-stop coding until I completed all the projects.",
          ),
        ),

        React.createElement(
          Project,
          {
            title: "Grossy Android.",
            img: "./img/grossy.png",
            tech: "kotlin java xml",
            link: "https://github.com/yogithesymbian/pfsoft-grossy",
            repo: "https://github.com/yogithesymbian/pfsoft-grossy",
          },

          React.createElement(
            "small",
            null,
            "Built using Kotlin & Java, Firebase & MySQL, PHP.",
          ),

          React.createElement(
            "p",
            null,
            "Prakering (PKL) / Magang at PF SOFT i have build Management Item Grossy and ordering item. [source is private]",
          ),
        ),
        React.createElement(
          Project,
          {
            title: "yoMovie.",
            img: "./img/made.png",
            tech: "kotlin java xml",
            link: "https://github.com/yogithesymbian/submission-scholarship-google-kejar-2019",
            repo: "https://github.com/yogithesymbian/submission-scholarship-google-kejar-2019",
          },

          React.createElement("small", null, "Built using Kotlin & Java."),

          React.createElement(
            "p",
            null,
            "class menjadi android developer expert [MADE] with dicoding",
          ),
        ),
        React.createElement(
          Project,
          {
            title: "yoBall.",
            img: "./img/kade.png",
            tech: "kotlin java xml",
            link: "https://github.com/yogithesymbian/Kotlin-Android-Developer-Expert",
            repo: "https://github.com/yogithesymbian/Kotlin-Android-Developer-Expert",
          },

          React.createElement("small", null, "Built using Kotlin ."),

          React.createElement(
            "p",
            null,
            "class kotlin android developer expert [KADE] with dicoding",
          ),
        ),
      ),
    ),
  );
};

/***********************
     Contact Component
    ***********************/

const Contact = (props) => {
  return React.createElement(
    "section",
    { id: "contact" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "heading-wrapper" },
        React.createElement(
          "div",
          { className: "heading" },
          React.createElement(
            "p",
            { className: "title" },
            "Want to ",
            React.createElement("br", null),
            "contact me?",
          ),

          React.createElement("p", { className: "separator" }),
          React.createElement(
            "p",
            { className: "subtitle" },
            "Please, use the form below or send an email to ",
            "",
            React.createElement(
              "span",
              { className: "mail" },
              "yogirenbox33",

              React.createElement("i", { className: "fas fa-at at" }),
              "gmail",

              React.createElement("i", { className: "fas fa-circle dot" }),
              "com",
            ),
            ":",
          ),
        ),

        React.createElement(SocialLinks, null),
      ),

      React.createElement(
        "form",
        { id: "contact-form", action: "#" },
        React.createElement("input", {
          placeholder: "Name [this feature doesnt work]",
          name: "name",
          type: "text",
          required: true,
        }),
        React.createElement("input", {
          placeholder: "Email [this feature doesnt work]",
          name: "email",
          type: "email",
          required: true,
        }),
        React.createElement("textarea", {
          placeholder: "Message [this feature doesnt work]",
          type: "text",
          name: "message",
        }),
        React.createElement("input", {
          className: "button",
          id: "submit",
          value: "Submit",
          type: "submit",
        }),
      ),
    ),
  );
};

/***********************
     Footer Component
    ***********************/

const Footer = (props) => {
  return React.createElement(
    "footer",
    null,
    React.createElement(
      "div",
      { className: "wrapper" },
      React.createElement("h3", null, "THANKS FOR VISITING"),
      React.createElement(
        "p",
        null,
        "\xA9 ",
        new Date().getFullYear(),
        " Yago Est\xE9vez. ReEdit Yogi Arif Widodo",
      ),
      React.createElement(SocialLinks, null),
    ),
  );
};

/***********************
     Social Links Component
    ***********************/

const SocialLinks = (props) => {
  return React.createElement(
    "div",
    { className: "social" },
    React.createElement(
      "a",
      {
        href: "thanks for yagoestevez",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Link to author's Twitter profile",
      },

      " ",
      React.createElement("i", { className: "fab fa-twitter" }),
    ),

    React.createElement(
      "a",
      {
        id: "profile-link",
        href: "https://github.com/yogithesymbian",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Link to author's GitHub Profile",
      },

      " ",
      React.createElement("i", { className: "fab fa-github" }),
    ),

    React.createElement(
      "a",
      {
        href: "thanks for yagoestevez",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Link to author's Codepen Profile",
      },

      " ",
      React.createElement("i", { className: "fab fa-codepen" }),
    ),
  );
};

/***********************
     Main Component
    ***********************/

class App extends React.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      menuState: false,
    });
    _defineProperty(
      this,
      "toggleMenu",

      () => {
        this.setState((state) => ({
          menuState: !state.menuState
            ? "active"
            : state.menuState === "deactive"
            ? "active"
            : "deactive",
        }));
      },
    );
  }

  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(Menu, {
        toggleMenu: this.toggleMenu,
        showMenu: this.state.menuState,
      }),
      React.createElement(Nav, {
        toggleMenu: this.toggleMenu,
        showMenu: this.state.menuState,
      }),
      React.createElement(Header, null),
      React.createElement(About, null),
      React.createElement(Projects, null),
      React.createElement(Contact, null),
      React.createElement(Footer, null),
    );
  }

  componentDidMount() {
    const navbar = document.querySelector("#navbar");
    const header = document.querySelector("#welcome-section");
    const forest = document.querySelector(".forest");
    const silhouette = document.querySelector(".silhouette");
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
        header.style.visibility =
          header.style.visibility === "hidden" && "visible";
      else header.style.visibility = "hidden";

      if (scrollPos + 100 >= window.innerHeight)
        navbar.classList.add("bg-active");
      else navbar.classList.remove("bg-active");
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: "start",
              behavior: "smooth",
            });
          });
        }
      }
    })();
  }
}

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
