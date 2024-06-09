const data = [
  {
    title: "Buttons",
    items: [
      {
        title: "Icon Buttons",
        components: [
          {
            title: "Icon with text",
            code: {
              javascript: `import { FC, MouseEventHandler } from "react";

      import styles from "../Styles/Global.module.css";
      
      import * as mdIcons from "react-icons/md";
      import * as piIcons from "react-icons/pi";
      import * as siIcons from "react-icons/si";
      import * as tbIcons from "react-icons/tb";
      import * as faIcons from "react-icons/fa";
      
      interface Props {
        iconName: string;
        iconPack: string;
        width: string;
        height: string;
        backgroundColor: string;
        color: string;
        textColor: string;
        text: string;
        active: Boolean;
        onClick: MouseEventHandler<HTMLDivElement>;
        iconSize?: number;
      }
      
      const IconButton: FC<Props> = (props): JSX.Element => {
        const iconPacks: any = {
          md: mdIcons,
          pi: piIcons,
          si: siIcons,
          tb: tbIcons,
          fa: faIcons,
        };
      
        const SelectedIconPack = iconPacks[props.iconPack];
        const Icon = SelectedIconPack[props.iconName];
      
        return (
          <div
            className={styles.iconButton}
            style={{
              width: props.width,
              height: props.height,
              backgroundColor: props.backgroundColor,
              border: props.active ? "2px solid white" : "2px solid transparent",
              // padding: props.active ? "none" : "2px",
            }}
            onClick={props.onClick}
          >
            <Icon size={props.iconSize ? props.iconSize : 32} color={props.color} />
            <p style={{ color: props.textColor }}>{props.text}</p>
          </div>
        );
      };
      
      export default IconButton;
      `,
              css: `.iconButton {
                max-width: 90%;
                border-radius: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
                color: white;
                font-weight: bold;
                user-select: none;
              }
              
              .iconButton:active {
                background-color: #2d3250 !important;
              }
              
              .iconButton:hover {
                filter: brightness(1.2);
                transition: all 0.3s;
              }`,
            },
          },
        ],
        editing: false,
        key: 0,
      },
      { title: "Image Buttons", components: [{}], editing: false, key: 1 },
      { title: "Radio Buttons", components: [{}, {}], editing: false, key: 2 },
      { title: "CheckBoxes", components: [{}, {}], editing: false, key: 3 },
      { title: "Switches", components: [{}, {}], editing: false, key: 4 },
    ],
    key: 0,
    editing: false,
    empty: false,
  },
  {
    title: "Cards",
    items: [
      { title: "Outlined Cards", components: [{}, {}], editing: false, key: 0 },
      { title: "Media Cards", components: [{}, {}], editing: false, key: 1 },
      { title: "Video Cards", components: [{}, {}], editing: false, key: 2 },
      {
        title: "Collapsible Cards",
        components: [{}, {}],
        editing: false,
        key: 3,
      },
      { title: "Image Cards", components: [{}, {}], editing: false, key: 4 },
      { title: "Menu Cards", components: [{}, {}], editing: false, key: 5 },
      { title: "Post Cards", components: [{}, {}], editing: false, key: 6 },
      { title: "Animated Cards", components: [{}, {}], editing: false, key: 7 },
      { title: "Grid Cards", components: [{}, {}], editing: false, key: 8 },
    ],
    key: 1,
    editing: false,
    empty: false,
  },
  {
    title: "Navigation",
    items: [
      { title: "Back-Links", components: [{}, {}], editing: false, key: 0 },
      { title: "Forward-Links", components: [{}, {}], editing: false, key: 1 },
      { title: "Pagination", components: [{}, {}], editing: false, key: 2 },
      { title: "Indexes", components: [{}, {}], editing: false, key: 3 },
      {
        title: "Link Containers",
        components: [{}, {}],
        editing: false,
        key: 4,
      },
    ],
    key: 2,
    editing: false,
    empty: false,
  },
  {
    title: "Carousels",
    items: [
      {
        title: "Image Carousels",
        components: [{}, {}],
        editing: false,
        key: 0,
      },
      {
        title: "Product Carousels",
        components: [{}, {}],
        editing: false,
        key: 1,
      },
      {
        title: "Content Carousels",
        components: [{}, {}],
        editing: false,
        key: 2,
      },
      {
        title: "Testimonial Carousels",
        components: [{}, {}],
        editing: false,
        key: 3,
      },
      {
        title: "Interactive Carousels",
        components: [{}, {}],
        editing: false,
        key: 4,
      },
      { title: "News Carousels", components: [{}, {}], editing: false, key: 5 },
    ],
    key: 3,
    editing: false,
    empty: false,
  },
];

// create interfaces for data

interface Component {
  title: string;
  code: {
    javascript: string;
    css: string;
  };
}

interface Item {
  title: string;
  components: Component[];
  editing: boolean;
  key: number;
}

interface Data {
  title: string;
  items: Item[];
  key: number;
  editing: boolean;
  empty: boolean;
}

// export interfaces
export type { Component, Item, Data };

export default data;
