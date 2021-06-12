import Muser from "./Muser";
import HerbTree from "./HerbTree";
import UnityCG from "./UnityCG";
import Scopus from "./Scopus";
import Cavorite from "./Cavorite";
import TelAviv from "./TelAviv";
import GenerativeLeaves from "./GenerativeLeaves";
import GrowthPatterns from "./GrowthPatterns";
import LeafMap from "./LeafMap";

export default [
  {
    slug: "muser",
    name: "Muser",
    subtitle: "Smart music visualizer",
    component: Muser,
  },
  {
    slug: "herbtree",
    name: "Herb Tree",
    subtitle: "Interactive botanic visualization",
    component: HerbTree,
  },
  {
    slug: "unitycg",
    name: "Unity CG",
    subtitle: "Computer graphics course in Unity",
    component: UnityCG,
  },
  {
    slug: "scopus",
    name: "Scopus",
    subtitle: "Short 3D animation",
    component: Scopus,
  },
  {
    slug: "cavorite",
    name: "Cavorite",
    subtitle: "Short 2D animation",
    component: Cavorite,
  },
  {
    slug: "tel-aviv",
    name: "Tel Aviv",
    subtitle: "Watercolor studies of Tel Aviv",
    component: TelAviv,
  },
  {
    slug: "leaf-map",
    name: "Leaf Map",
    subtitle: "Interactive map of leaf shapes",
    component: LeafMap,
  },
  {
    slug: "growth-patterns",
    name: "Growth Patterns",
    subtitle: "Population density visualization",
    component: GrowthPatterns,
  },
  {
    slug: "generative-leaves",
    name: "Generative Leaves",
    subtitle: "Screenprints of generative leaf shapes",
    component: GenerativeLeaves,
  },
];
