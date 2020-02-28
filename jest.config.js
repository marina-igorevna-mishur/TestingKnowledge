module.exports = {
    moduleFileExtensions: [
        'js',
        'jsx'
    ],
    moduleNameMapper: {
        '\\.(css|scss|less)$': 'identity-obj-proxy',
        'tests(.*)$': '<rootDir>/tests/$1'
    },
    modulePaths: [
        '<rootDir>/src/js/',
        '<rootDir>/src/',
        '<rootDir>/tests'
    ],
    testPathIgnorePatterns: [
        '<rootDir>/node_modules'
    ],
    coverageReporters: ['json', 'html'],
    collectCoverageFrom: [
        'src/js/**/*.{js,jsx}',
        '!**/node_modules/**',
    ]
}
