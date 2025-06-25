import { useState, useEffect } from 'react';

export default function DarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <main className="min-h-screen flex items-center justify-center dark:bg-black">
      <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white p-6 rounded-lg shadow-md max-w-lg">
        <h3 className="text-lg font-bold">Tailwind CSS 다크 모드</h3>
        <p className="text-slate-600 dark:text-slate-400">
          이 페이지는 다크 모드를 지원합니다.
        </p>
        <button
          onClick={() => setIsDark(!isDark)}
          className="mt-4 px-4 py-2 rounded bg-slate-200 dark:bg-slate-700"
        >
          {isDark ? '라이트 모드 전환' : '다크 모드 전환'}
        </button>
        <div className="">
          이 박스는 다크 모드에서 배경이 어두운 색으로 변합니다.
        </div>
      </div>
    </main>
  );
}
