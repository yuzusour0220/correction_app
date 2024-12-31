// app/upload/page.tsx
import FileUploader from "./components/FileUploader";

const UploadPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">ファイルアップロード</h1>
      <FileUploader />
    </div>
  );
};

export default UploadPage;
