import React from 'react'
import ContentLoader from 'react-content-loader'

const MyLoader: React.FC = () => (
  <ContentLoader
    speed={2}
    width={650}
    height={360}
    viewBox="0 0 400 210"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="3" y="25" rx="0" ry="0" width="3" height="1" />
    <rect x="8" y="3" rx="0" ry="0" width="281" height="80" />
    <rect x="6" y="92" rx="0" ry="0" width="283" height="82" />
  </ContentLoader>
)

export default MyLoader
