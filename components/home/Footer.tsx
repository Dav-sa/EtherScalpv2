export const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full  border-gray-200 bg-white py-5 text-center">
      <p className="text-gray-500">
        Initial template by{" "}
        <a
          className="font-medium text-gray-800 underline transition-colors"
          href="https://twitter.com/steventey"
          target="_blank"
          rel="noopener noreferrer"
        >
          Steven Tey
        </a>
      </p>
      <p className="text-gray-500">
        EtherScalp by
        <a
          className="mx-1 font-medium text-gray-800 underline transition-colors"
          href="https://github.com/DavSab"
          target="_blank"
          rel="noopener noreferrer"
        >
          David Sabri
        </a>
      </p>
    </div>
  );
};
