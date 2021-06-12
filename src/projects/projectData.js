import Muser from "./Muser";
import HerbTree from "./HerbTree";
import UnityCG from "./UnityCG";
import Scopus from "./Scopus";
import Cavorite from "./Cavorite";
import TelAviv from "./TelAviv";
import GenerativeLeaves from "./GenerativeLeaves";
import GrowthPatterns from "./GrowthPatterns";
import LeafMap from "./LeafMap";

const projectData = [
  {
    slug: "muser",
    name: "Muser",
    subtitle: "Smart music visualizer",
    component: Muser,
    color: "#648887",
  },
  {
    slug: "herbtree",
    name: "Herb Tree",
    subtitle: "Interactive botanic visualization",
    component: HerbTree,
    color: "#e7e1e1",
  },
  {
    slug: "unitycg",
    name: "Unity CG",
    subtitle: "Computer graphics course in Unity",
    component: UnityCG,
    color: "#8595a8",
  },
  {
    slug: "scopus",
    name: "Scopus",
    subtitle: "Short 3D animation",
    component: Scopus,
    color: "#a1a1a1",
  },
  {
    slug: "cavorite",
    name: "Cavorite",
    subtitle: "Short 2D animation",
    component: Cavorite,
    color: "#265a90",
  },
  {
    slug: "tel-aviv",
    name: "Tel Aviv",
    subtitle: "Watercolor studies of Tel Aviv",
    component: TelAviv,
    color: "#d1c0c4",
  },
  {
    slug: "leaf-map",
    name: "Leaf Map",
    subtitle: "Interactive map of leaf shapes",
    component: LeafMap,
    color: "#f8f3ef",
  },
  {
    slug: "growth-patterns",
    name: "Growth Patterns",
    subtitle: "Population density visualization",
    component: GrowthPatterns,
    color: "#9d929c",
  },
  {
    slug: "generative-leaves",
    name: "Generative Leaves",
    subtitle: "Screenprints of generative leaf shapes",
    component: GenerativeLeaves,
    color: "#8d7754",
  },
];

export default projectData;
