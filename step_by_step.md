# 学习步骤

这里记录的是学习的每一个步骤

## 安装依赖（针对 React 项目）

```
npm install @storybook/react --save-dev
npm install react react-dom --save
npm install babel-loader @babel/core --save-dev
```

## package.json 

```json
{
    "scripts": {
        "storybook": "start-storybook"
    }
}
```

## 添加 mian file

**storybook** 最基础的配置是告诉它 **stories** 的位置
在 **.storybook/main.js** 内添加如下内容

```js
module.exports = {
    stories: ['../src/**/*.stories.[t|j]s'],
};
```
*注* 我们编写的 **stories** 命名规则必须以 **.stories.js** 或者 **.stories.js** 为文件名结尾

## 编写你的 **stories**

如下示例（../src/index.stories.js）

```js
import React from "react";
import { Button } from "@storybook/react/demo";

export default {title: "Button"};

export const withText = () => <Button>Hello BUtton</Button>

export const withEmoji = () => (
    <Button>
        <span role="img" aria-label="so cool">
         😀 😎 👍 💯
        </span>
    </Button>
);
```

## run storybook

npm run stroybook

---------------------

## 高级

### 添加 addon-actions

1. install

npm i -D @storybook/addon-actions

2. config （.storybook/main.js）

```js
module.exports = {
  addons: ['@storybook/addon-actions/register']
}
```

3. usage

```js

// single action
import { action } from '@storybook/addon-actions';
import Button from './button';

export default {
  title: 'Button',
  component: Button,
};

export const defaultView = () => (
  <Button onClick={action('button-click')}>Hello World!</Button>
);

// multiple actions
import { actions } from '@storybook/addon-actions';
import Button from './button';

export default {
  title: 'Button',
  component: Button,
};

// This will lead to { onClick: action('onClick'), ... }
const eventsFromNames = actions('onClick', 'onMouseOver');

// This will lead to { onClick: action('clicked'), ... }
const eventsFromObject = actions({ onClick: 'clicked', onMouseOver: 'hovered' });

export const first = () => (
  <Button {...eventsFromNames}>Hello World!</Button>
);

export const second = () => (
  <Button {...eventsFromObject}>Hello World!</Button>
);

```
[参考文档](https://github.com/storybookjs/storybook/tree/master/addons/actions)

---------------------

## 添加 Knobs

**Knobs** 可以动态的修改组件属性

1. install

npm i -D @storybook/addon-knobs

2. config （.storybook/main.js）

```js
module.exports = {
  addons: ['@storybook/addon-knobs/register']
}
```

3. usage

```js

import React from "react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
  title: "Storybook Knobs",
  decorators: [withKnobs]
};
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.

// Knobs for React props
export const withAButton = () => (
  <button disabled={boolean("Disabled", false)}>
    {text("Label", "Hello Storybook")}
  </button>
);

// Knobs as dynamic variables.
export const asDynamicVariables = () => {
  const name = text("Name", "James");
  const age = number("Age", 35);
  const content = `I am ${name} and I'm ${age} years old.`;

  return <div>{content}</div>;
};
```

4. 可用的 **Knobs**

下面是 **@storybook/addon-knobs** 提供的可用的测试属性列表
都可以使用 **import { text } from '@storybook/addon-knobs';** 形式按需导入

| 属性          | 说明 |
|:--------------|:-----|
| text          |      |
| boolean       |      |
| number        |      |
| color         |      |
| object        |      |
| array         |      |
| select        |      |
| radio buttons |      |
| options       |      |
| files         |      |
| date          |      |
| button        |      |

[参考文档](https://github.com/storybookjs/storybook/tree/master/addons/knobs)

