"use client";

import { useState, ChangeEvent } from "react";
import axios from "axios";
import { Result } from "postcss";
import ResultCanvas from "./ResultCanvas";

interface UploadResponse {
  score: number;
  feedback: string;
  results: Array<{ x: number; y: number; score: number }>;
}

const FileUploader: React.FC = () => {
  const [questionFile, setQuestionFile] = useState<File | null>(null);
  const [answerFile, setAnswerFile] = useState<File | null>(null);
  const [criteriaFile, setCriteriaFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<UploadResponse | null>(null);
  const [error, setError] = useState<string>("");

  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    setFile: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!questionFile || !answerFile || !criteriaFile) {
      setError("全てのファイルを選択してください。");
      return;
    }

    const formData = new FormData();
    formData.append("question_file", questionFile);
    formData.append("answer_file", answerFile);
    formData.append("criteria_file", criteriaFile);

    try {
      setLoading(true);
      setError("");
      const response = await axios.post<UploadResponse>(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/upload/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setResult(response.data);
    } catch (err) {
      console.error("アップロードエラー:", err);
      setError("アップロードに失敗しました。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block mb-2">問題ファイルを選択</label>
        <input
          type="file"
          accept=".txt,.csv,.json"
          onChange={(e) => handleFileChange(e, setQuestionFile)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">解答ファイルを選択</label>
        <input
          type="file"
          accept=".txt,.csv,.json"
          onChange={(e) => handleFileChange(e, setAnswerFile)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">採点基準ファイルを選択</label>
        <input
          type="file"
          accept=".txt,.csv,.json"
          onChange={(e) => handleFileChange(e, setCriteriaFile)}
        />
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleUpload}
        disabled={loading}
      >
        {loading ? "アップロード中..." : "アップロード"}
      </button>

      {result && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold">採点結果</h2>
          <p>スコア: {result.score}</p>
          <p>フィードバック: {result.feedback}</p>
          {/* 結果の可視化コンポーネントをここに追加 */}
          <ResultCanvas results={result.results} />
        </div>
      )}
    </div>
  );
};

export default FileUploader;
