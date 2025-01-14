import type { NavLink } from "./type";
import { Vue2NavData } from "./navdata/vue2";
import { Vue3NavData } from "./navdata/vue3";
import { ToolNavData } from "./navdata/tool";
import { ReactNavData } from "./navdata/react";
import { NodeNavData } from "./navdata/node";
import { TsNavData } from "./navdata/ts";
import { LibNavData } from "./navdata/lib";
import { BuildNavData } from "./navdata/build";
import { CICDNavData } from "./navdata/cicd";
import { CssNavData } from "./navdata/css";
import { StudyDataNavData } from "./navdata/study-data";
import { GoodBlogNavData } from "./navdata/good-blog";
import { SiteGenerateNavData } from "./navdata/site-generate";
import { DesktopNavData } from "./navdata/desktop";
import { ChartNavData } from "./navdata/chart";
import { MicroFeNavData } from "./navdata/micro-fe";
import { RichEditorNavData } from "./navdata/editor";
import { MiniappNavData } from './navdata/miniapp'
import { AINavData } from './navdata/ai'

type NavData = {
  title: string;
  items: NavLink[];
};

export const NAV_DATA: NavData[] = [
  ToolNavData,
  AINavData,
  Vue2NavData,
  Vue3NavData,
  ReactNavData,
  NodeNavData,
  TsNavData,
  LibNavData,
  BuildNavData,
  CICDNavData,
  CssNavData,
  DesktopNavData,
  StudyDataNavData,
  GoodBlogNavData,
  SiteGenerateNavData,
  ChartNavData,
  MicroFeNavData,
  RichEditorNavData,
  MiniappNavData
];
