'use client'
import Slider from './components/Slider'

type SlideSection = {
  id: number;
  title: string;
  component: () => React.ReactNode;
}

export default function Home() {
  const slides: SlideSection[] = [
    {
      id: 1,
      title: "个人简介",
      component: () => (
        <div className="max-w-2xl w-full space-y-6">
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">关于我</h2>
            <p className="text-gray-700">
              {/* 在这里添加您的个人介绍 */}
              我是一名热爱技术的开发者，专注于...
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">技能专长</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>前端开发: React, Next.js, TypeScript</li>
              <li>后端开发: Node.js, Python</li>
              <li>其他技能...</li>
            </ul>
          </section>
        </div>
      )
    },
    {
      id: 2,
      title: "难忘的工作经历",
      component: () => (
        <div className="max-w-2xl w-full">
          <article className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">项目名称</h2>
            <div className="space-y-4">
              <section>
                <h3 className="text-xl font-medium mb-2">项目背景</h3>
                <p className="text-gray-700">
                  {/* 添加项目背景描述 */}
                </p>
              </section>
              {/* 其他项目内容... */}
            </div>
          </article>
        </div>
      )
    },
    {
      id: 3,
      title: "在公司的收获",
      component: () => (
        <div className="max-w-2xl w-full space-y-6">
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">技术成长</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>掌握了新的技术栈...</li>
              <li>提升了代码质量...</li>
              <li>学习了最佳实践...</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">工具使用</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>版本控制工具: Git</li>
              <li>项目管理工具: Jira</li>
              <li>协作工具: Confluence</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">团队协作</h2>
            <p className="text-gray-700">
              参与了多个跨部门项目，提升了沟通能力和团队协作技能。
              通过Code Review和技术分享，与团队成员互相学习和成长。
            </p>
          </section>

          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">其他收获</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>敏捷开发流程</li>
              <li>项目规划能力</li>
              <li>问题解决能力</li>
            </ul>
          </section>
        </div>
      )
    },
    {
      id: 4,
      title: "工程专题研究",
      component: () => (
        <div className="max-w-2xl w-full space-y-6">
          {[1, 2, 3].map((topic) => (
            <section key={topic} className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4">专题 {topic}</h2>
              <p className="text-gray-500 mb-4">待更新...</p>
              <div className="space-y-2">
                <h3 className="text-xl font-medium">参与人员</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>待定</li>
                  <li>待定</li>
                  <li>待定</li>
                </ul>
              </div>
            </section>
          ))}
        </div>
      )
    }
  ];

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <Slider slides={slides} />
    </main>
  );
}
