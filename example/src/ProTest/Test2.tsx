import {
  CaretDownFilled,
  DoubleRightOutlined,
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from "@ant-design/icons";
import type { ProSettings } from "@ant-design/pro-components";
import {
  PageContainer,
  ProCard,
  ProConfigProvider,
  ProLayout,
  SettingDrawer,
} from "@ant-design/pro-components";
import { css } from "@emotion/css";
import { Button, Divider, Input, Popover, theme } from "antd";
import React, { useState } from "react";
import defaultProps from "./_defaultProps";

const Item: React.FC<{ children: React.ReactNode }> = (props) => {
  const { token } = theme.useToken();
  return (
    <div
      className={css`
        color: ${token.colorTextSecondary};
        font-size: 14px;
        cursor: pointer;
        line-height: 22px;
        margin-bottom: 8px;
        &:hover {
          color: ${token.colorPrimary};
        }
      `}
      style={{
        width: "33.33%",
      }}
    >
      {props.children}
      <DoubleRightOutlined
        style={{
          marginInlineStart: 4,
        }}
      />
    </div>
  );
};

const List: React.FC<{ title: string; style?: React.CSSProperties }> = (
  props
) => {
  const { token } = theme.useToken();

  return (
    <div
      style={{
        width: "100%",
        ...props.style,
      }}
    >
      <div
        style={{
          fontSize: 16,
          color: token.colorTextHeading,
          lineHeight: "24px",
          fontWeight: 500,
          marginBlockEnd: 16,
        }}
      >
        {props.title}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {new Array(6).fill(1).map((_, index) => {
          return <Item key={index}>具体的解决方案-{index}</Item>;
        })}
      </div>
    </div>
  );
};

const SearchInput = () => {
  const { token } = theme.useToken();
  return (
    <div
      key="SearchOutlined"
      aria-hidden
      style={{
        display: "flex",
        alignItems: "center",
        marginInlineEnd: 24,
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <Input
        style={{
          borderRadius: 4,
          marginInlineEnd: 12,
          backgroundColor: token.colorBgTextHover,
        }}
        prefix={
          <SearchOutlined
            style={{
              color: token.colorTextLightSolid,
            }}
          />
        }
        placeholder="搜索方案"
        bordered={false}
      />
      <PlusCircleFilled
        style={{
          color: token.colorPrimary,
          fontSize: 24,
        }}
      />
    </div>
  );
};

const ComponentsTest = () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
    layout: "mix",
    splitMenus: true,
  });

  const [pathname, setPathname] = useState("/list/sub-page/sub-sub-page1");
  const [num, setNum] = useState(40);
  return (
    <div
      id="test-pro-layout"
      style={{
        height: "100vh",
      }}
    >
      <ProConfigProvider hashed={false}>
        <ProLayout
          {...defaultProps}
          location={{
            pathname,
          }}
          menuItemRender={(item, dom) => (
            <div
              onClick={() => {
                setPathname(item.path || "/welcome");
              }}
            >
              {dom}
            </div>
          )}
          {...settings}
          token={{
            colorBgAppListIconHover: "rgba(0,0,0,0.06)",
            colorTextAppListIconHover: "rgba(255,255,255,0.95)",
            colorTextAppListIcon: "rgba(255,255,255,0.85)",
            sider: {
              colorBgCollapsedButton: "#fff",
              colorTextCollapsedButtonHover: "rgba(0,0,0,0.65)",
              colorTextCollapsedButton: "rgba(0,0,0,0.45)",
              colorMenuBackground: "#004FD9",
              colorBgMenuItemCollapsedHover: "rgba(0,0,0,0.06)",
              colorBgMenuItemCollapsedSelected: "rgba(0,0,0,0.15)",
              colorBgMenuItemCollapsedElevated: "rgba(0,0,0,0.85)",
              colorMenuItemDivider: "rgba(255,255,255,0.15)",
              colorBgMenuItemHover: "rgba(0,0,0,0.06)",
              colorBgMenuItemSelected: "rgba(0,0,0,0.15)",
              colorTextMenuSelected: "#fff",
              colorTextMenuItemHover: "rgba(255,255,255,0.75)",
              colorTextMenu: "rgba(255,255,255,0.75)",
              colorTextMenuSecondary: "rgba(255,255,255,0.65)",
              colorTextMenuTitle: "rgba(255,255,255,0.95)",
              colorTextMenuActive: "rgba(255,255,255,0.95)",
              colorTextSubMenuSelected: "#fff",
            },
          }}
        >
          <PageContainer>
            <h1>demo</h1>
          </PageContainer>

          <SettingDrawer
            pathname={pathname}
            enableDarkTheme
            getContainer={() => document.getElementById("demo")}
            settings={settings}
            onSettingChange={(changeSetting: any) => {
              setSetting(changeSetting);
            }}
            disableUrlParams={false}
          />
        </ProLayout>
      </ProConfigProvider>
    </div>
  );
};
export default ComponentsTest;
