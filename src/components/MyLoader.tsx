import React from 'react'
import ContentLoader from 'react-content-loader'

const MyLoader: React.FC = () => (
  <ContentLoader
    speed={3}
    width={800}
    height={400}
    viewBox="0 0 800 400"
    backgroundColor="#ede9e9"
    foregroundColor="#c0b9b9"
  >
    <rect x="20" y="20" rx="0" ry="0" width="760" height="200" />
  </ContentLoader>
)

export default MyLoader
