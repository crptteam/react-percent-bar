import React from "react";
import { PercentBar } from "../src/";
import { mount } from "enzyme";

describe("PercentBar", () => {
  it("Should renders without problems", () => {
    const wrapper = mount(
      <PercentBar
        title="Реализованные"
        values={[
          {id: 1, percent: 4, count: 8, title:'Порча товара'},
          {id: 7, percent: 8, count: 16, title:'Продажа китайцам'},
          {id: 2, percent: 2, count: 4, title:'Хищение товара'},
          {id: 3, percent: 1, count: 2, title:'Отбор контрольных образцов'},
          {id: 4, percent: 1.5, count: 3, title:'Демонстрация на выставках и ярмарках'},
          {id: 5, percent: 1.5, count: 3, title:'Иное'},
        ]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
