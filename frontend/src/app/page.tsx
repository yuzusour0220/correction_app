// app/page.tsx
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">問題・解答添削アプリ</h1>
      <Link href="/upload">
        <div className="bg-blue-500 text-white px-4 py-2 rounded">
          ファイルをアップロード
        </div>
      </Link>
    </div>
  );
};

export default HomePage;
