import React from 'react';

const ProjectCard = ({ title, description, tags, imageUrl, githubUrl }) => {
  return (
    <div className="text-white p-4 rounded-lg shadow-md border border-gray-500 mb-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gray-600 text-sm px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      {imageUrl && (
        <img src={imageUrl} alt={title} className="mt-4 w-full h-auto rounded" />
      )}
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-white py-2 px-4 border border-gray-600 p-2 rounded"
        >
          Ver no GitHub
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
