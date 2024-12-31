"use client";

import React from "react";
import { Stage, Layer, Circle, Text } from "react-konva";

interface Result {
  x: number;
  y: number;
  score: number;
}

interface ResultCanvasProps {
  results: Result[];
}

const ResultCanvas: React.FC<ResultCanvasProps> = ({}) => {
  const results: Result[] = [
    { x: 100, y: 100, score: 90 },
    { x: 200, y: 200, score: 80 },
    { x: 300, y: 300, score: 70 },
  ];
  return (
    <Stage width={800} height={600}>
      <Layer>
        {results.map((result, index) => (
          <React.Fragment key={index}>
            <Circle
              x={result.x}
              y={result.y}
              radius={20}
              fill="red"
              stroke="black"
              strokeWidth={2}
            />
            <Text
              x={result.x - 10}
              y={result.y - 10}
              text={result.score.toString()}
              fontSize={15}
              fill="white"
            />
          </React.Fragment>
        ))}
      </Layer>
    </Stage>
  );
};

export default ResultCanvas;
