import { useContext } from "react";
import styles from "../Styles/Home.module.css";
import { GlobalContext } from "../Context/GlobalContext";
import ContainerCard from "./ContainerCard";

interface Props {
  heading: string;
}

const refinedComponentsData = [
  {
    languages: ["jsx", "css"],
    selectedLanguage: "jsx",
    code: [
      [
        `// JSX Code for ProductList Component\nconst ProductList = () => (\n  <div className="product-list">\n    {products.map((product) => (\n      <div key={product.id} className="product-item">\n        <h3>{product.name}</h3>\n        <p>{product.description}</p>\n        <span className="price">{product.price}</span>\n      </div>\n    ))}\n  </div>\n);`,
      ],
      [
        `/* CSS Code for ProductList Component */\n.product-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n.product-item {\n  padding: 20px;\n  background-color: #f0f0f0;\n  border-radius: 5px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n.product-item h3 {\n  color: #333;\n  font-size: 1.2rem;\n}\n.product-item p {\n  color: #666;\n  margin-bottom: 10px;\n}\n.product-item .price {\n  color: #f19583;\n  font-weight: bold;\n}`,
      ],
    ],
    title: "ProductList Component",
    copied: false,
  },
  {
    languages: ["jsx", "css"],
    selectedLanguage: "css",
    code: [
      [
        `// JSX Code for LoginForm Component\nconst LoginForm = () => (\n  <form className="login-form">\n    <label htmlFor="username">Username</label>\n    <input type="text" id="username" name="username" />\n    <label htmlFor="password">Password</label>\n    <input type="password" id="password" name="password" />\n    <button type="submit">Login</button>\n  </form>\n);`,
      ],
      [
        `/* CSS Code for LoginForm Component */\n.login-form {\n  max-width: 300px;\n  margin: 0 auto;\n  padding: 20px;\n  background-color: #e0e0e0;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.login-form label {\n  display: block;\n  margin-bottom: 8px;\n  color: #333;\n  font-weight: bold;\n}\n.login-form input {\n  width: 100%;\n  padding: 10px;\n  margin-bottom: 15px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n.login-form button {\n  width: 100%;\n  padding: 10px;\n  background-color: #f19583;\n  border: none;\n  color: #fff;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.login-form button:hover {\n  background-color: #e68067;\n}`,
      ],
    ],
    title: "LoginForm Component",
    copied: false,
  },
  {
    languages: ["jsx", "css"],
    selectedLanguage: "jsx",
    code: [
      [
        `// JSX Code for UserProfile Component\nconst UserProfile = ({ user }) => (\n  <div className="user-profile">\n    <h2>{user.name}</h2>\n    <p>Email: {user.email}</p>\n    <p>Joined: {user.joinedDate}</p>\n  </div>\n);`,
      ],
      [
        `/* CSS Code for UserProfile Component */\n.user-profile {\n  padding: 20px;\n  background-color: #f0f0f0;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.user-profile h2 {\n  color: #333;\n  font-size: 1.5rem;\n  margin-bottom: 10px;\n}\n.user-profile p {\n  color: #666;\n  margin-bottom: 8px;\n}\n`,
      ],
    ],
    title: "UserProfile Component",
    copied: false,
  },
  {
    languages: ["jsx", "css"],
    selectedLanguage: "css",
    code: [
      [
        `// JSX Code for Navigation Component\nconst Navigation = () => (\n  <nav className="navigation">\n    <ul>\n      <li><a href="/">Home</a></li>\n      <li><a href="/about">About</a></li>\n      <li><a href="/services">Services</a></li>\n      <li><a href="/contact">Contact</a></li>\n    </ul>\n  </nav>\n);`,
      ],
      [
        `/* CSS Code for Navigation Component */\n.navigation {\n  background-color: #333;\n  padding: 10px 0;\n}\n.navigation ul {\n  list-style-type: none;\n  display: flex;\n  justify-content: center;\n  padding: 0;\n}\n.navigation li {\n  margin: 0 10px;\n}\n.navigation a {\n  color: #fff;\n  text-decoration: none;\n  font-weight: bold;\n  padding: 8px 16px;\n  border-radius: 5px;\n  transition: background-color 0.3s;\n}\n.navigation a:hover {\n  background-color: #555;\n}`,
      ],
    ],
    title: "Navigation Component",
    copied: false,
  },
  {
    languages: ["jsx", "css"],
    selectedLanguage: "jsx",
    code: [
      [
        `// JSX Code for BlogPost Component\nconst BlogPost = ({ post }) => (\n  <article className="blog-post">\n    <h2>{post.title}</h2>\n    <p>{post.content}</p>\n    <span className="date">{post.date}</span>\n  </article>\n);`,
      ],
      [
        `/* CSS Code for BlogPost Component */\n.blog-post {\n  padding: 20px;\n  background-color: #f0f0f0;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n}\n.blog-post h2 {\n  color: #333;\n  font-size: 1.5rem;\n  margin-bottom: 10px;\n}\n.blog-post p {\n  color: #666;\n  margin-bottom: 8px;\n}\n.blog-post .date {\n  color: #999;\n  font-size: 0.8rem;\n}\n`,
      ],
    ],
    title: "BlogPost Component",
    copied: false,
  },
];

const ContentArea: React.FC<Props> = ({ heading }) => {
  const {
    gridColumns,
    // width
  } = useContext(GlobalContext);

  return (
    <div
      className={styles.contentArea}
      // style={{ width: width > 1800 ? "70%" : "85%" }}+
    >
      <div className={styles.contentHeading}>
        <h3>{heading}</h3>
      </div>
      <div
        className={styles.contentGrid}
        style={{ gridTemplateColumns: `repeat(${gridColumns},auto)` }}
      >
        {refinedComponentsData.map((codeSection, index) => (
          <ContainerCard
            key={index}
            title={codeSection.title}
            code={codeSection.code}
            languages={codeSection.languages}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentArea;
