import { WaterMark } from "@ant-design/pro-components";
import {
  ProForm,
  ProFormDatePicker,
  ProFormText,
} from "@ant-design/pro-components";
import React from "react";

export default function Test1() {
  return (
    <div>
      <WaterMark content="蚂蚁集团">
        <ProForm
          onFinish={async (values) => {
            console.log(values);
          }}
        >
          <ProFormText name="name" label="姓名" />
          <ProFormText name="age" label="年龄" />
          <ProFormDatePicker name="date" label="请选择日期" />
        </ProForm>
      </WaterMark>
    </div>
  );
}
