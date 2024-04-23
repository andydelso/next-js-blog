import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({ title, description, imageUrl, href }) => {
  const [showDialog, setShowDialog] = useState(false);

  const toggleDialog = () => {
    setShowDialog(!showDialog);
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
      {imageUrl && (
        <div className="relative h-52">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
    )}
    <div className="p-6">
        {href ? (
            <Link href={href}>
                <a className="text-xl font-semibold mb-2 text-white hover:underline">{title}</a>
            </Link>
        ) : (
            <h2 className="text-xl font-semibold mb-2 text-white">{title}</h2>
        )}
        <p className="text-gray-300 mb-4">
            {description.slice(0, 100)}
            {description.length > 100 && !showDialog && (
                <>
                    {'... '}
                    <button
                        className="text-blue-500 hover:text-blue-700 focus:outline-none"
                        onClick={toggleDialog}
                    >
                        Read More
                    </button>
                </>
            )}
        </p>
        {showDialog && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-gray-800 p-6 max-w-md rounded-lg">
                    <h2 className="text-xl font-semibold mb-2 text-white">{title}</h2>
                    <p className="text-gray-300 mb-4">{description}</p>
                    <button
                        className="text-blue-500 hover:text-blue-700 focus:outline-none"
                        onClick={toggleDialog}
                    >
                        Close
                    </button>
                </div>
            </div>
        )}
    </div>
</div>
);
};

export default ProjectCard;
