import React, { useState } from 'react';

const ProjectCard = ({ title, description, tags, imageUrl, githubUrl, detailedDescription }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="text-white p-4 rounded-lg shadow-md border border-gray-500 mb-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className='text-gray-300 min-h-[50px]'>{description}</p>
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
      {githubUrl ? (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-white py-2 px-4 border border-gray-600 p-2 rounded hover:text-white hover:bg-[#2023276e] rounded"
        >
          Ver no GitHub
        </a>
      ) : (
        <>
          <button
            className="mt-4 inline-block text-white py-2 px-4 border border-gray-600 p-2 rounded hover:text-white hover:bg-[#2023276e] rounded"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Ver detalhes
          </button>
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
              <div className="bg-[#181a1b] border border-gray-600 rounded-lg p-6 max-w-lg w-full shadow-lg relative">
                <button
                  className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl"
                  onClick={() => setShowModal(false)}
                  aria-label="Fechar"
                >
                  &times;
                </button>
                <h4 className="text-2xl font-bold mb-4">{title}</h4>
                <div
                  className="text-gray-300"
                  dangerouslySetInnerHTML={{
                    __html: detailedDescription || 'Descrição detalhada não disponível.'
                  }}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProjectCard;
