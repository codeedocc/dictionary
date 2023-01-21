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
    <rect x="6" y="3" rx="8" ry="8" width="281" height="82" />
    <rect x="6" y="97" rx="8" ry="8" width="281" height="82" />
  </ContentLoader>
)

export default MyLoader
