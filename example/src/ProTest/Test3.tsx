import React from "react";

import { PageContainer, ProLayout } from "@ant-design/pro-components";
import { Button } from "antd";
import { useRef } from "react";
import customMenuDate from "./customMenu";

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default function Test3() {
  const actionRef = useRef<{
    reload(): void;
  }>();
  return (
    <>
      <ProLayout
        style={{
          height: "100vh",
        }}
        actionRef={actionRef}
        menu={{
          request: async () => {
            await waitTime(2000);
            return customMenuDate;
          },
        }}
        location={{
          pathname: "/welcome/welcome",
        }}
      >
        <PageContainer content="欢迎使用">
          Hello World
          <Button
            style={{
              margin: 8,
            }}
            onClick={() => {
              actionRef.current?.reload();
            }}
          >
            刷新菜单
          </Button>
        </PageContainer>
      </ProLayout>
    </>
  );
}
