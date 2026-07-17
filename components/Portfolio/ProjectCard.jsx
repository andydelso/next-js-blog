import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLinkIcon } from '@heroicons/react/outline';

const ProjectCard = ({ title, description, imageUrl, href }) => {
  const [showDialog, setShowDialog] = useState(false);

  const toggleDialog = () => {
    setShowDialog(!showDialog);
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-md dark:bg-gray-800">
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
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p>
            {description.slice(0, 100)}
            {description.length > 100 && !showDialog && (
                <>
                    {'... '}
                    <button
                        className="text-base text-orange-500 hover:text-orange-900 dark:hover:text-orange-200"
                        onClick={toggleDialog}
                    >
                        Read More
                    </button>
                </>
            )}
        </p>
        {href ? (
            <Link href={href} legacyBehavior>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-4 text-base text-orange-500 hover:text-orange-900 dark:hover:text-orange-200"
                >
                    View Project
                    <ExternalLinkIcon className="h-4 w-4" />
                </a>
            </Link>
        ) : (
            <span className="inline-block mt-4 text-base italic text-gray-500 dark:text-gray-400">
                In Development
            </span>
        )}
        {showDialog && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white shadow dark:bg-gray-800 dark:text-white p-6 max-w-md rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">{title}</h2>
                    <p className="mb-4">{description}</p>
                    <button
                        className="text-base text-orange-500 hover:text-orange-900 dark:hover:text-orange-200"
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
