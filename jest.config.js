module.exports = {
    preset: 'react-native',
    setupFiles: ['./jest/setup.js'],
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    transformIgnorePatterns: [
      'node_modules/(?!(react-native|@react-native|react-native-static-safe-area-insets|react-native-reanimated)/)',
    ],
    transform: {
      '^.+\\.tsx?$': 'babel-jest',
    },
  };