# 央山医疗 - PlanT 手术机器人

这是央山医疗 PlanT 手术机器人的 Web 平台项目，采用前后端分离架构。

## 项目结构

```
YsWeb_gg/
  ├── frontend/          # React前端项目
  │   ├── src/          # 源代码
  │   ├── public/       # 静态资源
  │   └── package.json  # 前端依赖
  └── backend/          # NestJS后端项目
      ├── src/          # 源代码
      └── package.json  # 后端依赖
```

## 技术栈

### 前端

- React
- TypeScript
- Tailwind CSS
- Shadcn/ui

### 后端

- NestJS
- TypeScript
- Node.js

## 开发指南

### 安装依赖

```bash
# 安装前端依赖
cd frontend
npm install

# 安装后端依赖
cd ../backend
npm install
```

### 启动开发服务器

```bash
# 启动前端开发服务器
cd frontend
npm run dev

# 启动后端开发服务器
cd ../backend
npm run start:dev
```

## 特性

- 现代化的 UI 设计
- 响应式布局
- 深色主题
- TypeScript 支持
