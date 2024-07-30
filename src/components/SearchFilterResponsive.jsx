import React from 'react';
import PropTypes from 'prop-types';

const SearchFilterResponsive = ({ showMenu, content }) => {
  return (
    <div className={`${showMenu ? "top-0" : "-top-[100%]"} fixed left-0 z-20 flex h-auto w-full bg-[#E5E7EB] transition-all duration-200 ease-in`}>
      <div className="p-4 w-full">
        {content}
      </div>
    </div>
  );
};

SearchFilterResponsive.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  content: PropTypes.node.isRequired,
};

export default SearchFilterResponsive;
