import React from 'react';

interface WorkProps {
  content: string;
}

const Work: React.FC<WorkProps> = ({ content }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md overflow-auto">
      <pre className="whitespace-pre-wrap text-sm">
        <code>{content}</code>
      </pre>
    </div>
  );
};

export default Work;
