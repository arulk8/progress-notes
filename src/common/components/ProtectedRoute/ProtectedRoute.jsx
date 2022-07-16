import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useStore } from '../../../context/app-store';

function ProtectedRoute({ redirectPath = '/', children }) {
  const { userDetails } = useStore();
  if (!userDetails) {
    return (
      <Navigate to={redirectPath} replace state={{ from: redirectPath }} />
    );
  }

  return children;
}

ProtectedRoute.propTypes = {
  redirectPath: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default ProtectedRoute;
